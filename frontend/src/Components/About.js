import React from "react";
import Navbar from "./Navbar";
import { Box, Button, Center, Flex, Text, VStack } from "@chakra-ui/react";
import AgeAnalysis from "./AgeAnalysis";
import SleepAnalysis from "./SleepAnalysis";
import OccupationAnalysis from "./OccupationAnalysis";

export default function About() {
  return (
    <div>
      <Navbar />
      <Center py={8} px={4}>
        <Box
          maxW="800px"
          w="100%"
          bg="white"
          p={6}
          borderRadius="lg"
          boxShadow="xl"
        >
          <VStack spacing={8} align="stretch">
            <Box textAlign="center">
              <Text fontSize="2xl" fontWeight="bold" color="teal.600" mb={4}>
                Analysis of Factors Contributing to Sleep Disorders
              </Text>
              <Text fontSize="lg" color="gray.700" mb={6}>
                I conducted an analysis on various factors that contribute to
                sleep disorders. Below, you can find the visual representations
                of my findings. For a more detailed view of the analysis, please
                refer to the linked Jupyter Notebook.
              </Text>
              <a href="https://notebooksharing.space/view/51a2cdf80dd1abe804201912270a33337761ee8473804f4a55cd1e2cc98c5351#displayOptions=">
                <Button colorScheme="yellow" size="lg">
                  View Notebook
                </Button>
              </a>
            </Box>
            <Box>
              <Text
                fontSize="xl"
                fontWeight="bold"
                color="teal.600"
                mb={4}
                textAlign="center"
              >
                Age Analysis
              </Text>
              <AgeAnalysis />
            </Box>
            <Box>
              <Text
                fontSize="xl"
                fontWeight="bold"
                color="teal.600"
                mb={4}
                textAlign="center"
              >
                Sleep Duration Analysis
              </Text>
              <SleepAnalysis />
            </Box>
            <Box>
              <Text
                fontSize="xl"
                fontWeight="bold"
                color="teal.600"
                mb={4}
                textAlign="center"
              >
                Occupation Analysis
              </Text>
              <OccupationAnalysis />
            </Box>
          </VStack>
        </Box>
      </Center>
    </div>
  );
}
