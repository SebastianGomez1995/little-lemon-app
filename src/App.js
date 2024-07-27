import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Highlight from './components/Highlights'
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';



function App() {
  return (
    <ChakraProvider >
        <Header/>
        <HeroSection/>
        <Highlight/>
        <Testimonials/>
        <About/>
        <Footer/>
    </ChakraProvider>
  );
}

export default App;
