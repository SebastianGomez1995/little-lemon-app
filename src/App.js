import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import Header from './components/Header';
import Main from './components/Main';


function App() {
  return (
    <ChakraProvider
    justifyContent="center">
      
        <Header justifyContent="center"/>
        <Main/>
      
    </ChakraProvider>
  );
}

export default App;
