import { Box, Heading } from "@chakra-ui/react";
import React, { useState } from "react";

interface IProps {
  name?: string;
  age?: number;
}

interface IState {
  NAME: string;
}

const Home: React.FC<IProps> = ({ name, age }) => {
  const [data, setData] = useState<IState>({ NAME: "Akshay" });

  return (
    <Box>
      {name}, {age}
      <Heading>{data.NAME}</Heading>
    </Box>
  );
};

export default Home;
