import { VStack,HStack } from "@chakra-ui/react";
import iconperfil from '../imagen/perfil.png'
import './style.css'

const Testimonials = () =>{
    return(
        <VStack className='container'>
            <h1>Testimonials</h1>
            <HStack className="HSTestimonials">
                <VStack className='VSTestimonials'>
                    <h2>Rating</h2>
                    <HStack>
                        <img src={iconperfil} alt="foto perfil"/>
                        <p>Name</p>
                    </HStack>
                </VStack>
                <VStack className='VSTestimonials'>
                    <h2>Rating</h2>
                    <HStack>
                    <img src={iconperfil} alt="foto perfil"/>
                        <p>Name</p>
                    </HStack>
                </VStack>
                <VStack className='VSTestimonials'>
                    <h2>Rating</h2>
                    <HStack>
                    <img src={iconperfil} alt="foto perfil"/>
                        <p>Name</p>
                    </HStack>
                </VStack>
                <VStack className='VSTestimonials'>
                    <h2>Rating</h2>
                    <HStack>
                    <img src={iconperfil} alt="foto perfil"/>
                        <p>Name</p>
                    </HStack>
                </VStack>
            </HStack>
        </VStack>
    )
}

export default Testimonials;