import { ChakraProvider } from "@chakra-ui/react";
import Header from "./component/Header";
import HeaderP from "./component/HeaderP";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <HeaderP />
    </ChakraProvider>
  );
}

export default App;
