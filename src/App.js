import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <main>
        <Nav/>
      </main>
    </ChakraProvider>
  );
}

export default App;
