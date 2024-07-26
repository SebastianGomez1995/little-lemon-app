import React from 'react';
import { Box,HStack } from '@chakra-ui/react';
import Nav from './Nav';
import logo from './Logo.svg'

const Header = () => {
  return (
    <Box>
      <HStack 
          px={16}
          py={4}
          justifyContent="center"
          alignItems="center">
          <img src={logo} alt="Logo" style={{ width: '150px', height: '150px' }} />
          <Nav/>
      </HStack>
    </Box>
    
  );
};

export default Header;