import About from "./Components/About";
import InputForm from "./Components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import AgeAnalysis from "./Components/AgeAnalysis";
import Navbar from "./Components/Navbar";
import OccupationAnalysis from "./Components/OccupationAnalysis";
import SleepAnalysis from "./Components/SleepAnalysis";

function App() {
  const theme = extendTheme({
    styles: {
      global: () => ({
        body: {
          bg: "",
        },
      }),
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InputForm />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/all"
            element={
              <>
                <Navbar />
                <AgeAnalysis />
                <SleepAnalysis />
                <OccupationAnalysis />
              </>
            }
          />
          <Route
            path="/ageAnalyse"
            element={
              <>
                <Navbar /> <AgeAnalysis />
              </>
            }
          />
          <Route
            path="/occuAnalyse"
            element={
              <>
                <Navbar /> <OccupationAnalysis />
              </>
            }
          />
          <Route
            path="/sleepAnalyse"
            element={
              <>
                <Navbar /> <SleepAnalysis />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
