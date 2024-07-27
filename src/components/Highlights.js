import { VStack,HStack,Button } from "@chakra-ui/react";
import bruchetta from '../imagen/bruchetta.svg'
import greakSalad from '../imagen/greek salad.jpg'
import lemmondessert from '../imagen/lemon dessert.jpg'
import iconEye from '../imagen/🦆 icon _eye_.svg'

const Highlights = () =>{
    return(
        <VStack className="VStackHigh">
            <HStack className="HStackHigh">
                <h1>This weeks specials!</h1>
                <Button>Online Menu</Button>
            </HStack>
            <HStack className="HStackHigh">
                <VStack className="VStackHigh1">
                <img src={greakSalad} alt="Greak Salad"/>

                    <HStack>
                        <h2>Greak Salad</h2>
                        <p>$12.99</p>
                    </HStack>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    <HStack>
                        <h2>Order Delivery</h2>
                        <img src={iconEye} alt="see more" style={{ width: '20px'}}/>
                    </HStack>
                </VStack>
                <VStack className="VStackHigh1">
                    <img src={bruchetta} alt="bruchtta"/>
                    <HStack>
                        <h2>bruchetta</h2>
                        <p>$ 5.99</p>
                    </HStack>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    <HStack>
                        <h2>Order Delivery</h2>
                        <img src={iconEye} alt="see more" style={{ width: '20px'}}/>
                    </HStack>
                </VStack>
                <VStack className="VStackHigh1">
                    <img src={lemmondessert} alt="lemon dessert"/>
                    <HStack>
                        <h2>Lemon Dessert</h2>
                        <p>$5.00</p>
                    </HStack>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    <HStack>
                        <h3>Order Delivery</h3>
                        <img src={iconEye} alt="see more" style={{ width: '20px'}}/>
                    </HStack>
                </VStack>
            </HStack>
        </VStack>
    )
}

export default Highlights;