import { VStack,HStack } from "@chakra-ui/react";
import './style.css'

const Testimonials = () =>{
    return(
        <VStack className='container'>
            <h1>Testimonials</h1>
            <HStack>
                <VStack>
                    <h2>Rating</h2>
                    <HStack>
                        
                        <p>Name</p>
                    </HStack>
                </VStack>
                <VStack>
                    <h2>Rating</h2>
                    <HStack>
                        
                        <p>Name</p>
                    </HStack>
                </VStack>
                <VStack>
                    <h2>Rating</h2>
                    <HStack>
                        
                        <p>Name</p>
                    </HStack>
                </VStack>
                <VStack>
                    <h2>Rating</h2>
                    <HStack>
                        <p>Name</p>
                    </HStack>
                </VStack>
            </HStack>
        </VStack>
    )
}

export default Testimonials;