import { VStack,HStack } from "@chakra-ui/react";
import imagen1 from '../imagen/Mario and Adrian A.jpg'
import imagen2 from '../imagen/restaurant chef B.jpg'
import './style.css'

const About=()=>{
    return(
        <HStack className='container' id="about-section" alignItems={"flex-start"} >
            <VStack className="VStackHeroSection" alignItems={"start"}>
                <h1>
                    Little Lemon
                </h1>
                <h2>Chicago</h2>
                <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</article>
            </VStack>
            <img src={imagen1} id="imagen1" alt="chef"/>
            <img src={imagen2} id="imagen2" alt="chef"/>

            
        </HStack>
    )
}

export default About;