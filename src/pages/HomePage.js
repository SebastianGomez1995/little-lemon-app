import { ChakraProvider } from "@chakra-ui/react";
import HeroSection from '../components/HeroSection';
import Highlight from '../components/Highlights'
import Testimonials from '../components/Testimonials';
import About from '../components/About';

function HomePage() {
  return (
    <ChakraProvider>
        <HeroSection/>
        <Highlight/>
        <Testimonials/>
        <About/>
    </ChakraProvider>
  );
}

export default HomePage;
