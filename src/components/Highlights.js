import { VStack,HStack,Button } from "@chakra-ui/react";
import CardHighlights from './CardHighlights';
import './style.css'

const specials = [
    {
        getImageSrc: () => require("../imagen/greek salad.jpg"),
        title: 'Greak Salad',price: '12.99',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },{
        getImageSrc: () => require('../imagen/bruchetta.jpg'),
        title: 'Bruchetta',price:'5.99',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },{
        getImageSrc: () => require('../imagen/lemon dessert.jpg'),
        title: 'Lemon Dessert',price:'5.00',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
];

const Highlights = () =>{
    return(
        <VStack className='container'>
            <HStack className="HStackHigh">
                <h1>This weeks specials!</h1>
                <Button>Online Menu</Button>
            </HStack>
            <HStack className="HStackHigh">
            {specials.map((special)=>(<CardHighlights
            key={special.title}
            imagen={special.getImageSrc()}
            title={special.title}
            price={special.price}
            description={special.description}
            />))}
            </HStack>
        </VStack>
    )
}

export default Highlights;