import { VStack,HStack,Image } from "@chakra-ui/react";
import React from "react";
import iconEye from '../imagen/🦆 icon _eye_.svg'
import './style.css'
const Card =({imagen,title,price,description})=>{
    return(
        <VStack className="VStackHigh1">
            <Image id="imageCard" src={imagen}/>
            <HStack className="HStackHigh">
                <h2>{title}</h2>
                <p>{price}</p>
            </HStack>
            <p>{description}</p>
            <HStack className="HStackHigh">
                <h2>Order Delivery</h2>
                <img src={iconEye} alt="see more" style={{ width: '20px'}}/>
            </HStack>
        </VStack>
        )
}

export default Card;