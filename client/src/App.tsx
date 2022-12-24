import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./organisms/Footer";
import Navbar from "./organisms/Navbar";

export const App: React.FC = () => (
  <ChakraProvider>
    <Navbar />
    <Footer />
  </ChakraProvider>
);
