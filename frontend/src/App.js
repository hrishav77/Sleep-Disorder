import About from './Components/About';
import InputForm from './Components/Form';
import {BrowserRouter,Routes ,Route} from "react-router-dom";
import { extendTheme,ChakraProvider } from '@chakra-ui/react';

function App() {
  const theme = extendTheme({
    styles: {
      global: () => ({
        body: {
          bg: ""
        }
      })
    }
  });
  return (
    <ChakraProvider theme={theme}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <InputForm/>}/>
      <Route path="/about" element={ <About/>}/>

    </Routes>
  
   </BrowserRouter>
   </ChakraProvider>
  );
}

export default App;
