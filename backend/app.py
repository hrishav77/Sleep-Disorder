import re
from flask import Flask,request
from flask_cors import CORS
from flask import jsonify
import pickle
import pandas as pd
app = Flask(__name__)
CORS(app)


@app.route('/',methods=['GET'])
def Hello():
    return jsonify("Welcome to the server")


@app.route('/form',methods=['POST'])
def submit_form():
    form_data = request.get_json()
    desired_order = [
        'Age',
        'Sleep Duration(5-8)',
        'Quality of Sleep(4-10)',
        'Physical Activity Level(30-100)',
        'Stress Level(3-8)',
        'Heart Rate',
        'Daily Steps(max 10000)',
        'BloodPressure_high',
        'BloodPressure_low',
        'Gender_Female(1 or 0)',
        'Gender_Male(1 or 0)',
        'Occupation_Accountant',
        'Occupation_Doctor',
        'Occupation_Engineer',
        'Occupation_Lawyer',
        'Occupation_Manager',
        'Occupation_Nurse',
        'Occupation_Sales Representative',
        'Occupation_Salesperson',
        'Occupation_Scientist',
        'Occupation_Software Engineer',
        'Occupation_Teacher',
        'BMI Category_Normal',
        'BMI Category_Normal Weight',
        'BMI Category_Obese',
        'BMI Category_Overweight'
    ]

    sorted_form_data = {key: form_data[key] for key in desired_order}
    input_df = pd.DataFrame(sorted_form_data, index=[0])
    with open('scaler.pkl', 'rb') as file:
        loaded_scaler = pickle.load(file)
    X_standard = loaded_scaler.transform(input_df.values)
    with open('model_health','rb') as file:
        mp = pickle.load(file)
    prediction=mp.predict(X_standard)
    prediction_list = prediction.tolist()
    prediction_value = prediction_list[0] 
    response = jsonify(prediction_value)
    return response

if __name__=="__main__":
    app.run(debug=False,host='0.0.0.0')
