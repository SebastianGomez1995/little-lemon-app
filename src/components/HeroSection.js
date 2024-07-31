import {HStack,VStack,Button } from "@chakra-ui/react";
import restaurant from '../imagen/restauranfood.jpg'
import { useNavigate } from "react-router-dom";



import "./style.css"


const HeroSection =() => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/booking");
    };
    return(
    <HStack className='container' id="hero-section" alignItems={"flex-start"}>
        <VStack className="VStackHeroSection" alignItems={"start"}>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <article>
                <p>We are family owned</p>
                <p>Mediterranean restaurant,</p>
                <p>focused on traditional</p>
                <p>recipes server with a modern</p>
                <p>twist</p>
            </article>
            <Button onClick={handleClick}>Reserve a Table</Button>
            </VStack>
        <img src={restaurant} alt="restaurant little lemon" className="imageHero"/>
    </HStack>
    )
}

export default HeroSection;