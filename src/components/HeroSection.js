import { Box,HStack,VStack,Button } from "@chakra-ui/react";
import restaurant from './restauranfood.jpg'
import "./Nav.css"
const HeroSection =() => {
    return(
        <Box className="boxhero" 
        paddingLeft={100}
        paddingRight={100}
        >
            <HStack 
            px={16}
            py={4}
            alignItems="start"
            >
                <VStack
                alignItems="left"
                >
                    <h1 style={{ width: '80%'}}>Little Lemon</h1>
                    <h2 style={{ width: '60%'}}>Chicago</h2>
                    <p style={{ width: '50%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <Button style={{ width: '20%'}}>Reserve a Table</Button>
                </VStack>
                <img src={restaurant} alt="Logo" style={{ width: '350px'}} />
            </HStack>
        </Box>
    )
}

export default HeroSection;