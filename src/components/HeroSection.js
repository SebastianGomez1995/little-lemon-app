import { Box,HStack,VStack,Button } from "@chakra-ui/react";
import restaurant from './restauranfood.jpg'
const HeroSection =() => {
    return(
        <Box>
            <HStack 
            px={16}
            py={4}
            padding="auto">
                <VStack>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <Button>Reserve a Table</Button>
                </VStack>
                <img src={restaurant} alt="Logo" style={{ width: '350px'}} />
            </HStack>
        </Box>
    )
}

export default HeroSection;