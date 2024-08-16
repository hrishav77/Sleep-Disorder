import React from "react";
import { Box, Image, Text, VStack, Center } from "@chakra-ui/react";

const AgeAnalysis = () => {
  return (
    <Box p={6} bg="gray.50" borderRadius="lg" boxShadow="md">
      <VStack spacing={5}>
        <Text fontSize="2xl" fontWeight="bold" color="teal.600">
          Analysis of Sleep Disorders by Age
        </Text>
        <Box>
          <Text fontSize="lg" mb={3}>
            The distribution of Insomnia cases by age shows a significant peak
            around the age of 45, indicating that individuals in this age group
            are more prone to suffer from Insomnia.
          </Text>
          <Center>
            <Image
              src="age1.PNG"
              alt="Distribution of Insomnia Cases by Age"
              boxShadow="lg"
              borderRadius="md"
            />
          </Center>
        </Box>
        <Box>
          <Text fontSize="lg" mt={5} mb={3}>
            The distribution of Sleep Apnea cases by age indicates an increasing
            trend in cases as age advances, particularly showing a spike in the
            55-60 age group.
          </Text>
          <Center>
            <Image
              src="age2.PNG"
              alt="Distribution of Sleep Apnea Cases by Age"
              boxShadow="lg"
              borderRadius="md"
            />
          </Center>
        </Box>
      </VStack>
    </Box>
  );
};

export default AgeAnalysis;
