import React from 'react'
import Navbar from './Navbar'
import { Button, Center, Flex, Text } from '@chakra-ui/react'
export default function About() {
  return (
    <div>
        <Navbar/>
        <Center>
        <Flex direction='column'>
        <Text fontSize="lg">To know how this data is predicted click on the link below</Text>
        <a href='https://notebooksharing.space/view/3fe810e15e4a5bfb2deef79697a6e8bf1ffb10aba6e3bc66a1f98685aeeb3d2e#displayOptions='>
           <Button colorScheme='yellow' size="sm">Notebook link</Button> 
        </a>
        </Flex>
        </Center>
    </div>
  )
}
