import React from 'react';
import { Box, Flex,Spacer,Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link to="/">
            <Text fontSize="xl" color="white">Sleep Disorder predictor</Text>
            
          </Link>
        </Box>
        <Spacer/>
        <Flex>
          <Link to="/">
            <Text m="3" color="white">Predict</Text>
            
          </Link>
          <Link to='/about'>
            <Text m="3" color="white">About</Text>
          </Link>
        
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
