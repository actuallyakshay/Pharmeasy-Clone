import { ChakraProvider, Box } from "@chakra-ui/react";
import React from "react";
import AllRoutes from "./Routes/AllRoutes";

export const App: React.FC = () => (
  <ChakraProvider>
    <AllRoutes />
  </ChakraProvider>
);
