import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";

interface IState {
  count: number;
  name: string;
}
interface IProps {}

const Counter: React.FC = () => {
  const [counter, setCount] = useState<IState>({ count: 0, name: "" });

  const handleINC = (): void => {
    setCount({ ...counter, count: counter.count + 1 });
  };
  const handleDEC = (): void => {
    setCount({ ...counter, count: counter.count - 1 });
  };

  const hanldeChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setCount({ ...counter, [e.target.name]: e.target.value });
  };

  return (
    <Box>
      Counter : {counter.count}
      <Button onClick={() => handleDEC()}>-</Button>
      <Button onClick={() => handleINC()}>+</Button>
      <Input name="name" type="text" onChange={hanldeChangeInput} />
    </Box>
  );
};

export default Counter;
