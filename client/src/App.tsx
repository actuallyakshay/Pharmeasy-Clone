import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./organisms/Footer";
import Navbar from "./organisms/Navbar";
import AllRoutes from "./Pages/AllRoutes";

export const App: React.FC = () => (
  <ChakraProvider>
    <Navbar />
    <AllRoutes />
    <Footer />
  </ChakraProvider>
);
