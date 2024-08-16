import React from "react";
import {
  Box,
  Flex,
  Text,
  Link as ChakraLink,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiHome, FiInfo } from "react-icons/fi";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={6} py={2} boxShadow="sm">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link to="/">
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="white"
              letterSpacing="wide"
            >
              Sleep Predictor
            </Text>
          </Link>
        </Box>
        <Flex alignItems="center">
          <ChakraLink
            as={Link}
            to="/"
            _hover={{ textDecoration: "none" }}
            mx={3}
          >
            <IconButton
              variant="ghost"
              color="white"
              _hover={{ bg: "teal.600" }}
              aria-label="Home"
              fontSize="20px"
              icon={<FiHome />}
            />
            {/* <Text display={{ base: "none", md: "inline" }} ml={2} color="white">
              Predict
            </Text> */}
          </ChakraLink>
          <ChakraLink
            as={Link}
            to="/about"
            _hover={{ textDecoration: "none" }}
            mx={3}
          >
            <IconButton
              variant="ghost"
              color="white"
              _hover={{ bg: "teal.600" }}
              aria-label="About"
              fontSize="20px"
              icon={<FiInfo />}
            />
            {/* <Text display={{ base: "none", md: "inline" }} ml={2} color="white">
              About
            </Text> */}
          </ChakraLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
