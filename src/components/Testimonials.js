import { VStack,HStack } from "@chakra-ui/react";
import CardTestimonials from './CardTestimonials'
import './style.css'

const testimonios =[
    {
        getImage: () =>require('../imagen/perfil.png'),
        rating:'rating',
        name: 'Usuario'
    },
    {
        getImage: ()=>require('../imagen/perfil.png'),
        rating:'rating',
        name: 'Usuario1'
    },
    {
        getImage: ()=>require('../imagen/perfil.png'),
        rating:'rating',
        name: 'Usuario2'
    },
    {
        getImage: ()=>require('../imagen/perfil.png'),
        rating:'rating',
        name: 'Usuario3'
    },
];

const Testimonials = () =>{
    return(
        <VStack className='container'>
            <h1>Testimonials</h1>
            <HStack className="HSTestimonials">
                {testimonios.map((testimonio)=>(
                <CardTestimonials
                    key={testimonio.name}
                    imagen={testimonio.getImage()}
                    rating={testimonio.rating}
                    name={testimonio.name}
                />))}
            </HStack>
        </VStack>
    )
}

export default Testimonials;