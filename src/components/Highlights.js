import { VStack,HStack,Button } from "@chakra-ui/react";
import plato2 from './bruchetta.svg'
import plato1 from './greek salad.jpg'
import plato3 from './lemon dessert.jpg'
import icon from './🦆 icon _eye_.svg'

const Highlights = () =>{
    return(
        <VStack>
            <HStack>
                <h1>Specials</h1>
                <Button>Online Menu</Button>
            </HStack>
            <HStack>
                <VStack>
                <img src={plato1} alt="Logo" style={{ width: '350px'}} />

                    <HStack>
                        <h1>Greak Salad</h1>
                        <p>$12.99</p>
                    </HStack>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    <HStack>
                        <h1>Order Delivery</h1>
                        <img src={icon} alt="Logo" style={{ width: '20px'}}/>
                    </HStack>
                </VStack>
                <VStack>
                    <img src={plato2} alt="Logo" style={{ width: '350px'}}/>
                    <HStack>
                        <h1>bruchetta</h1>
                        <p>$ 5.99</p>
                    </HStack>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    <HStack>
                        <h1>Order Delivery</h1>
                        <img src={icon} alt="Logo" style={{ width: '20px'}}/>
                    </HStack>
                </VStack>
                <VStack>
                    <img src={plato3} alt="logo" style={{ width: '350px'}}/>
                    <HStack>
                        <h1>Lemon Dessert</h1>
                        <p>$5.00</p>
                    </HStack>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    <HStack>
                        <h1>Order Delivery</h1>
                        <img src={icon} alt="Logo" style={{ width: '20px'}}/>
                    </HStack>
                </VStack>
            </HStack>
        </VStack>
    )
}

export default Highlights;