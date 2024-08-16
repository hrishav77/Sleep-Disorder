import React from "react";
import { Box, Image, Text, VStack, Center } from "@chakra-ui/react";

const SleepAnalysis = () => {
  return (
    <Box p={6} bg="gray.50" borderRadius="lg" boxShadow="md">
      <VStack spacing={8} align="stretch">
        <Center>
          <Text fontSize="3xl" fontWeight="bold" color="teal.600">
            Sleep Disorders Analysis by Duration of Sleep
          </Text>
        </Center>
        <Box>
          <Text fontSize="lg" color="gray.700" mb={4}>
            The first chart shows that most Insomnia cases occur with a sleep
            duration around 6.5 hours, suggesting that insufficient sleep is a
            significant factor.
          </Text>
          <Center>
            <Image
              src="sleep1.PNG"
              alt="Distribution of Insomnia Cases by Duration of Sleep"
              boxShadow="lg"
              borderRadius="lg"
              maxW="100%"
            />
          </Center>
        </Box>
        <Box>
          <Text fontSize="lg" color="gray.700" mb={4}>
            The second chart indicates that Sleep Apnea cases are distributed
            across different sleep durations, with peaks at 6 hours and 8 hours,
            reflecting varied sleep patterns among affected individuals.
          </Text>
          <Center>
            <Image
              src="sleep2.PNG"
              alt="Distribution of Sleep Apnea Cases by Duration of Sleep"
              boxShadow="lg"
              borderRadius="lg"
              maxW="100%"
            />
          </Center>
        </Box>
      </VStack>
    </Box>
  );
};

export default SleepAnalysis;
