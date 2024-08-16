import React from "react";
import { Box, Image, Text, VStack, Center } from "@chakra-ui/react";

const OccupationAnalysis = () => {
  return (
    <Box p={6} bg="gray.50" borderRadius="lg" boxShadow="md">
      <VStack spacing={5}>
        <Text fontSize="2xl" fontWeight="bold" color="teal.600">
          Analysis of Sleep Disorders by Occupation
        </Text>
        <Box>
          <Text fontSize="lg" mb={3}>
            The chart illustrates the distribution of different sleep disorders
            across various occupations. Nurses and Doctors show the highest
            number of cases, with Insomnia being prevalent among Lawyers and
            Salespersons.
          </Text>
          <Center>
            <Image
              src="Occupation.PNG"
              alt="Occupation vs Sleep Disorder"
              boxShadow="lg"
              borderRadius="md"
            />
          </Center>
        </Box>
      </VStack>
    </Box>
  );
};

export default OccupationAnalysis;
