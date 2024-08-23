import React from 'react';
import { HStack } from '@chakra-ui/react';
import Nav from './Nav';
import logo from '../imagen/Logo.svg'
import './style.css'

const Header = () => {
  return (
  <HStack className='container' id='home-section'>
    <img src={logo} alt="Logo de la Marca Little Lemon"/>
    <Nav orientation='horizontal'/>
    
  </HStack>
  );
};

export default Header;