import { Box } from "@chakra-ui/react";

import Navbar from "./organisam/Navbar";
import Footer from "./organisam/Footer";
import AllRoutes from "./Pages/AllRoutes";
import "./App.css";
import Medicine from "./Component/Medicine/Medicine";

function App() {
  return (
    <Box>
      {/* <Navbar /> */}
      {/* <AllRoutes /> */}
      {/* <Footer /> */}
      <Medicine />
    </Box>
  );
}

export default App;
