import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Text,
  Center,
  VStack,
  Heading,
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import Analysis from "./Analysis";
import BeatLoader from "react-spinners/BeatLoader";

const InputForm = () => {
  const [pred, setPred] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Age: "",
    "Sleep Duration": "",
    "Quality of Sleep(4-10)": "",
    "Physical Activity Level(30-100)": "",
    "Stress Level(3-8)": "",
    "Heart Rate": "",
    "Daily Steps(max 10000)": "",
    BloodPressure_high: "",
    BloodPressure_low: "",
    "Gender_Female(1 or 0)": "0",
    "Gender_Male(1 or 0)": "0",
    Occupation_Accountant: "0",
    Occupation_Doctor: "0",
    Occupation_Engineer: "0",
    Occupation_Lawyer: "0",
    Occupation_Manager: "0",
    Occupation_Nurse: "0",
    "Occupation_Sales Representative": "0",
    Occupation_Salesperson: "0",
    Occupation_Scientist: "0",
    "Occupation_Software Engineer": "0",
    Occupation_Teacher: "0",
    "BMI Category_Normal": "0",
    "BMI Category_Normal Weight": "0",
    "BMI Category_Obese": "0",
    "BMI Category_Overweight": "0",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await fetch("https://sleep-disorder.onrender.com/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const prediction = await response.json(); // Extract the JSON data from the response
        setLoading(false);
        setPred(prediction);
      } else {
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [value]: "1",
    }));
  };

  const selected_columns = [
    "Age",
    "Sleep Duration(5-8)",
    "Quality of Sleep(4-10)",
    "Physical Activity Level(30-100)",
    "Stress Level(3-8)",
    "Heart Rate",
    "Daily Steps(max 10000)",
    "BloodPressure_high",
    "BloodPressure_low",
  ];
  const occupationOptions = [
    "Accountant",
    "Doctor",
    "Engineer",
    "Lawyer",
    "Manager",
    "Nurse",
    "Sales Representative",
    "Salesperson",
    "Scientist",
    "Software Engineer",
    "Teacher",
  ];

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar />
      {!pred && (
        <>
          <Analysis />
          <Center>
            <VStack spacing={4} mt={10} textAlign="center">
              <Heading as="h1" size="xl" color="teal.500">
                Sleep Disorder Risk Assessment
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Fill out the form below to know your chances of having a sleep
                disorder
              </Text>
            </VStack>
          </Center>

          <Box
            maxWidth="500px"
            margin="0 auto"
            mt={8}
            bg="white"
            p="5"
            borderRadius="5"
            boxShadow="lg"
          >
            <form onSubmit={handleSubmit}>
              {selected_columns.map((column) => (
                <FormControl key={column} mb={4}>
                  <FormLabel>{column}</FormLabel>
                  <Input
                    type="text"
                    name={column}
                    value={formData[column]}
                    onChange={changeHandler}
                    required
                  />
                </FormControl>
              ))}
              <FormControl mb={4}>
                <FormLabel>Occupation</FormLabel>
                <Select name="Occupation" onChange={handleChange} required>
                  <option value="">Select an occupation</option>
                  {occupationOptions.map((occupation) => (
                    <option key={occupation} value={`Occupation_${occupation}`}>
                      {occupation}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>BMI</FormLabel>
                <Select name="BMI" onChange={handleChange} required>
                  <option value="">Select your BMI</option>
                  <option value="BMI Category_Normal">Normal</option>
                  <option value="BMI Category_Overweight">Overweight</option>
                  <option value="BMI Category_Obese">Obese</option>
                  <option value="BMI Category_Normal Weight">Not sure</option>
                </Select>
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Gender</FormLabel>
                <Select name="Gender" onChange={handleChange} required>
                  <option value="">Select your Gender</option>
                  <option value="Gender_Male(1 or 0)">Male</option>
                  <option value="Gender_Female(1 or 0)">Female</option>
                </Select>
              </FormControl>

              <Button colorScheme="teal" type="submit" width="100%">
                Submit
              </Button>
            </form>
            {isLoading && (
              <Center mt={4}>
                <BeatLoader
                  color="#36d7b7"
                  size={15}
                  aria-label="loading"
                  cssOverride={{ margin: "5px", color: "teal" }}
                />
              </Center>
            )}
          </Box>
        </>
      )}
      <Center mt={8}>
        {pred && (
          <>
            <Text fontSize="4xl" color="teal.300" mb={4}>
              {pred === "Insomnia"
                ? "You have a high chance of insomnia"
                : pred === "Sleep Apnea"
                ? "You have a high chance of sleep apnea"
                : "Yay! You have a very little chance of any sleep disorder"}
            </Text>
            <Button
              colorScheme="yellow"
              onClick={() => window.location.reload()}
              size="sm"
              m="5"
            >
              Predict again
            </Button>
          </>
        )}
      </Center>
    </>
  );
};

export default InputForm;
