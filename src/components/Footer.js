import React from 'react';
import { VStack,HStack } from "@chakra-ui/react";
import Nav from './Nav';
import './style.css'

const Footer= () => {
  return (
    <HStack className='container'>
      <p>photo</p>
      <Nav/>
      <VStack>
        <p>Contact</p>
        <p>Phone</p>
        <p>Address</p>
        <p>Email</p>
      </VStack>
      <VStack>
        <p>Sofial Media</p>
        <p>Phone</p>
        <p>Address</p>
        <p>Email</p>
      </VStack>
    </HStack>
  )
};

export default Footer;