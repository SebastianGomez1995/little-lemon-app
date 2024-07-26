import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import Header from './components/Header';
import Main from './components/Main';


function App() {
  return (
    <ChakraProvider>
      <main>
        <Header/>
        <Main/>
      </main>
    </ChakraProvider>
  );
}

export default App;
