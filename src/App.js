import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Highlight from './components/Highlights'


function App() {
  return (
    <ChakraProvider>
        <Header/>
        <HeroSection/>
        <Highlight/>
    </ChakraProvider>
  );
}

export default App;
