import { ChakraProvider, Box } from "@chakra-ui/react";
import React from "react";
import { Medicine } from "./Components/Medicine/Medicine";

export const App: React.FC = () => (
  <ChakraProvider>
    <Medicine />
  </ChakraProvider>
);
