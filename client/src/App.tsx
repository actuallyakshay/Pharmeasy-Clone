import { Box, ChakraProvider } from "@chakra-ui/react";
import Temp from "./Components/Cart/CartItems/Temp";
import Footer from "./organisms/Footer";
import Navbar from "./organisms/Navbar";
import NavbarForMobile from "./organisms/NavbarForMobile";
import AllRoutes from "./Routes/AllRoutes";

export const App: React.FC = () => (
  <ChakraProvider>
    <Box fontFamily={"poppins"}>
      <NavbarForMobile />
      <Navbar />
      <AllRoutes />
      <Footer />
    </Box>
  </ChakraProvider>
);
