import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Center, Flex, Text, Box } from "@chakra-ui/react";

export default function About() {
  return (
    <div>
      <Center mt="8">
        <Box
          maxW="500px"
          w="100%"
          p="6"
          bg="blue.50"
          m="4"
          borderRadius="md"
          boxShadow="lg"
          textAlign="center"
        >
          <Text fontSize="2xl" mb="4" fontWeight="bold" color="blue.700">
            Analysis Overview
          </Text>
          <Text fontSize="md" mb="6" color="blue.600">
            Select a category to view detailed analysis:
          </Text>
          <Flex justify="center" wrap="wrap">
            <Button
              as={RouterLink}
              to="/all"
              colorScheme="teal"
              variant="solid"
              m="2"
              p="4"
              size="md"
              width="48%"
              _hover={{ textDecoration: "none" }}
            >
              All
            </Button>

            <Button
              as={RouterLink}
              to="/sleepAnalyse"
              colorScheme="teal"
              variant="outline"
              m="2"
              p="4"
              size="md"
              width="48%"
              _hover={{ textDecoration: "none" }}
            >
              Sleep Duration
            </Button>

            <Button
              as={RouterLink}
              to="/ageAnalyse"
              colorScheme="teal"
              variant="outline"
              m="2"
              p="4"
              size="md"
              width="48%"
              _hover={{ textDecoration: "none" }}
            >
              Age
            </Button>

            <Button
              as={RouterLink}
              to="/occuAnalyse"
              colorScheme="teal"
              variant="outline"
              m="2"
              p="4"
              size="md"
              width="48%"
              _hover={{ textDecoration: "none" }}
            >
              Occupation
            </Button>
          </Flex>
        </Box>
      </Center>
    </div>
  );
}
