import React from 'react';
import { HStack } from '@chakra-ui/react';
import Nav from './Nav';
import logo from './Logo.svg'

const Header = () => {
  return (
  <HStack
          paddingTop={2}
          paddingBottom={2}
          style={{width:"auto"}}
          justifyContent="center"
          alignItems="center"
          >
          <img src={logo} alt="Logo" style={{ width: '16%' }} />
          <Nav/>
      </HStack>
  );
};

export default Header;