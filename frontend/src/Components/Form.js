import { useState } from 'react';
import {  Box, FormControl, FormLabel, Input, Button,Select,Text, Center} from '@chakra-ui/react';
import Navbar from './Navbar';
import BeatLoader from "react-spinners/BeatLoader";
const InputForm = () => {
 

    const [pred,setpred]=useState("")
    const [isloading,setloading]=useState(false)
    const [formData, setFormData] = useState({
        'Age': '',
        'Sleep Duration': '',
        'Quality of Sleep(4-10)': '',
        'Physical Activity Level(30-100)': '',
        'Stress Level(3-8)': '',
        'Heart Rate': '',
        'Daily Steps(max 10000)': '',
        'BloodPressure_high': '',
        'BloodPressure_low': '',
        'Gender_Female(1 or 0)': '0',
        'Gender_Male(1 or 0)': '0',
        'Occupation_Accountant': '0',
        'Occupation_Doctor': '0',
        'Occupation_Engineer': '0',
        'Occupation_Lawyer': '0',
        'Occupation_Manager': '0',
        'Occupation_Nurse': '0',
        'Occupation_Sales Representative': '0',
        'Occupation_Salesperson': '0',
        'Occupation_Scientist': '0',
        'Occupation_Software Engineer': '0',
        'Occupation_Teacher': '0',
        'BMI Category_Normal': '0',
        'BMI Category_Normal Weight': '0',
        'BMI Category_Obese': '0',
        'BMI Category_Overweight': '0',
      });

      const handleSubmit =async (e) => {
        setloading(true)
        e.preventDefault();
        const updatedFormData = { ...formData };
        setFormData(updatedFormData);
        try {
          const response = await fetch('https://sleep-disorder.onrender.com/form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          
          if (response.ok) {
            const prediction = await response.json(); // Extract the JSON data from the response
            setloading(false)
            setpred(prediction)
          } else {
            console.error('Error submitting form');
            // Handle error response
          }
        } catch (error) {
          console.error('Error submitting form:', error);
          // Handle error case
        }

        console.log(formData);
      };

      const handleChange = (e) => {
        const { value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [value]: '1',
        }));
      };


      const selected_columns = [
        'Age',
        'Sleep Duration',
        'Quality of Sleep(4-10)',
        'Physical Activity Level(30-100)',
        'Stress Level(3-8)',
        'Heart Rate',
        'Daily Steps(max 10000)',
        'BloodPressure_high',
        'BloodPressure_low',
      ];
      const occupationOptions = [
        'Accountant',
        'Doctor',
        'Engineer',
        'Lawyer',
        'Manager',
        'Nurse',
        'Sales Representative',
        'Salesperson',
        'Scientist',
        'Software Engineer',
        'Teacher',
      ];
   
      const changehandler = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
  

  return (
      <>
      <Navbar/>
      {
        !pred &&  <>
        <Center><Text fontSize="3xl">Fill this form to know the chances of having a sleep disorder</Text></Center>
        
        <Box maxWidth="500px" margin="0 auto" mt={8} bg="white" p="5" borderRadius="5" boxShadow="lg">
        <form onSubmit={handleSubmit}>
          {selected_columns.map((column) => (
            <FormControl key={column} mb={4}>
              <FormLabel>{column}</FormLabel>
              <Input
                type="text"
                name={column}
                value={formData[column]}
                onChange={changehandler}
              />
            </FormControl>
          ))}
           <FormControl mb={4}>
            <FormLabel>Occupation</FormLabel>
            <Select name="Occupation" onChange={handleChange} >
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
            <Select name="BMI"  onChange={handleChange} >
              <option value="">Select you BMI</option>
              <option value="BMI Category_Normal">Normal</option>
              <option value="BMI Category_Overweight">Overweight</option>
              <option value="BMI Category_Obese">Obese</option>
              <option value="BMI Category_Normal Weight">not sure</option>

              {/* Add more occupation options here */}
            </Select>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Gender</FormLabel>
            <Select name="Gender"  onChange={handleChange} >
              <option value="">Select you Gender</option>
              <option value="Gender_Male(1 or 0)">Male</option>
              <option value="Gender_Female(1 or 0)">Female</option>

              {/* Add more occupation options here */}
            </Select>
          </FormControl>
   
          <Button colorScheme="teal" type="submit">
            Submit
          </Button>

        </form>
        {isloading && <BeatLoader color="#36d7b7" size={15} margin="5px" aria-label='loading'cssOverride={{margin: "5px",colour:"teal"}}/>}

      </Box>

      </>
      }
  <Center>

      {pred ? (
  <Text fontSize="4xl" color="teal.300">
 
    {pred === 'Insomnia' ? (
      'You have a high chance of insomnia'
    ) : pred === 'Sleep Apnea' ? (
      'You have a high chance of sleep apnea'
    ) : (
      'Yay! You have a very little chance of any sleep disorder'
    )}
  </Text>
) : null}
{pred && <Button colorScheme='yellow' onClick={()=>window.location.reload()} m="3" size="sm">Predict again</Button>}
</Center>

     </>

  );
};

export default InputForm;
