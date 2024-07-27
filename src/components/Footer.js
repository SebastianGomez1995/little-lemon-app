import React from 'react';
import { VStack,HStack } from "@chakra-ui/react";
import Nav from './Nav';
import logo from '../imagen/Logo.svg'
import './style.css'

const Footer= () => {
  return (
    <HStack className='container'>
      <img src={logo} alt="Logo de la Marca Little Lemon"/>
      <Nav orientation="vertical"/>
      <VStack className='VSFooter' alignItems= {"start"}>
        <p>Contact</p>
        <p>Phone</p>
        <p>Address</p>
        <p>Email</p>
      </VStack>
      <VStack className='VSFooter' alignItems= {"start"}>
        <p>Social Media</p>
        <p>Phone</p>
        <p>Address</p>
        <p>Email</p>
      </VStack>
    </HStack>
  )
};

export default Footer;