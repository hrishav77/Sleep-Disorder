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
        <a href='https://notebooksharing.space/view/51a2cdf80dd1abe804201912270a33337761ee8473804f4a55cd1e2cc98c5351#displayOptions='>
           <Button colorScheme='yellow' size="sm">Notebook link</Button> 
        </a>
        </Flex>
        </Center>
    </div>
  )
}
