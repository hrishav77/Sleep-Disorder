import re
import random
import json
import torch
import pickle
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS
from model import Myneural
from nltk_utils import tokenize, bagOfWords

app = Flask(__name__)
CORS(app)

# Define device
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# Load chatbot model
File = "data.pth"
data = torch.load(File, map_location=torch.device("cpu"), weights_only=True)

input_size = data["inputSize"]
hidden_size = data["hiddenSize"]
output_size = data["outputSize"]
allWords = data["AllWords"]
modelState = data["modelState"]
tags = data["tags"]

model = Myneural(input_size, hidden_size, output_size).to(device)
model.load_state_dict(modelState)
model.eval()

botName = "ChatBot"  # Define bot name

# Load intents
with open("intents.json", "r") as f:
    intents = json.load(f)

@app.route("/", methods=["GET"])
def hello():
    return jsonify("Welcome to the server")

@app.route("/chatbot", methods=["POST"])
def chatbot_response():
    data = request.get_json()
    sentence = data.get("message", "")  # Extract message safely

    if not sentence:
        return jsonify({"response": "Please enter a message."})

    X = bagOfWords(sentence, allWords)
    X = X.reshape(1, X.shape[0])
    X = torch.from_numpy(X).to(device)

    output = model(X)
    _, predicted = torch.max(output, dim=1)
    tag = tags[predicted.item()]

    probs = torch.softmax(output, dim=1)
    prob = probs[0][predicted.item()]

    if prob > 0.70:
        for intent in intents["intents"]:
            if tag == intent["tag"]:
                return jsonify({"response": random.choice(intent["responses"])})
    else:
        return jsonify({"response": "I don't understand"})

@app.route("/form", methods=["POST"])
def predict_health():
    form_data = request.get_json()

    desired_order = [
        "Age",
        "Sleep Duration(5-8)",
        "Quality of Sleep(4-10)",
        "Physical Activity Level(30-100)",
        "Stress Level(3-8)",
        "Heart Rate",
        "Daily Steps(max 10000)",
        "BloodPressure_high",
        "BloodPressure_low",
        "Gender_Female(1 or 0)",
        "Gender_Male(1 or 0)",
        "Occupation_Accountant",
        "Occupation_Doctor",
        "Occupation_Engineer",
        "Occupation_Lawyer",
        "Occupation_Manager",
        "Occupation_Nurse",
        "Occupation_Sales Representative",
        "Occupation_Salesperson",
        "Occupation_Scientist",
        "Occupation_Software Engineer",
        "Occupation_Teacher",
        "BMI Category_Normal",
        "BMI Category_Normal Weight",
        "BMI Category_Obese",
        "BMI Category_Overweight",
    ]

    sorted_form_data = {key: form_data.get(key, 0) for key in desired_order}

    input_df = pd.DataFrame(sorted_form_data, index=[0])

    with open("scaler.pkl", "rb") as file:
        loaded_scaler = pickle.load(file)

    X_standard = loaded_scaler.transform(input_df.values)

    with open("model_health", "rb") as file:
        mp = pickle.load(file)

    prediction = mp.predict(X_standard)
    prediction_value = prediction.tolist()[0]

    return jsonify({"prediction": prediction_value})

if __name__ == "__main__":
    app.run(debug=False, host="0.0.0.0")
