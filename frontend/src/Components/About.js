import React from 'react'
import Navbar from './Navbar'
import { Button, Center, Flex, Text } from '@chakra-ui/react'
export default function About() {
  return (
    <div>
        <Navbar/>
        <Center>
        <Flex direction='column'>
        <Text fontSize="lg">I did some analysis on different factors which causes sleep disorders here is a jupyter notebook link showing the analysis</Text>
        <a href='https://notebooksharing.space/view/c5ab25e96a24715ce13fe1767005fff7eb10bd096b99e8d836e47f674d5dba44#displayOptions='>
           <Button colorScheme='yellow' size="sm">Notebook link</Button> 
        </a>
        </Flex>
        </Center>
    </div>
  )
}
