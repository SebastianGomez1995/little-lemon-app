import { VStack,HStack,Image } from "@chakra-ui/react";
import React from "react";
import './style.css'

const CardTestimonials = ({rating,imagen,name})=>{
    return (
        <VStack className='VSTestimonials'>
            <h2>{rating}</h2>
            <HStack>
                <Image src={imagen} alt="foto perfil"/>
                <p>{name}</p>
            </HStack>
        </VStack>
    )
}

export default CardTestimonials;