import { VStack,HStack } from "@chakra-ui/react";
import './style.css'

const About=()=>{
    return(
        <HStack className='container'>
            <VStack>
                <h1>
                    Little Lemon
                </h1>
                <h2>Chicago</h2>
                <article>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem </article>
            </VStack>
            <p>photo1</p>
            <p>photo2</p>
        </HStack>
    )
}

export default About;