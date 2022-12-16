import { Box } from "@chakra-ui/react";

import Navbar from "./organisam/Navbar";
import Footer from "./organisam/Footer";
import AllRoutes from "./Pages/AllRoutes";
import "./App.css";

function App() {
  return (
    <Box>
      <Navbar />
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
