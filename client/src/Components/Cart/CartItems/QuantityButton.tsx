import { Button, HStack, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { getCartData } from "../../../Redux/Cart/cart.action";

interface IProps {
  quantity: number;
  id: string;
}

type EStatus = "info" | "warning" | "success" | "error" | "loading" | undefined;

const QuantityButton: React.FC<IProps> = ({ quantity, id }) => {
  const [qty, setQty] = useState<number>(quantity);
  const dispatch: Dispatch<any> = useDispatch();
  const toast = useToast();

  const customToast = (
    title: string,
    status: EStatus,
    description: string
  ): void => {
    toast({
      title: title,
      description: description,
      status: status,
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  let token: string =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2E3ZGRlMzUyOGUyMzQ5YzZmZGJhYjYiLCJwaG9uZU51bWJlciI6ODA4MCwiaWF0IjoxNjcxOTc3MDg0fQ.LlIvWL8LQ2vhae7n0S_rMbcwgU2usmk8IRo2I67iQT0";

  const handleAddToCartDEC = (id: string): void => {
    let body = {
      quantity: -1,
      type: "dec",
      product: id,
    };
    axios
      .post(`${process.env.REACT_APP_URL}/cart`, body, {
        headers: {
          token: token,
        },
      })
      .then((res): void => {
        if (res.data == "Deleted") {
          customToast("Hey !", "error", "Item Deleted Successfully");
          dispatch(getCartData());
        } else {
          dispatch(getCartData());
          customToast("Hey !", "success", "Product quantity decreased by 1");
        }
      })
      .catch((e): void => console.log(e.message));
  };
  const handleAddToCartINC = (id: string): void => {
    let body = {
      quantity: 1,
      type: "inc",
      product: id,
    };
    axios
      .post(`${process.env.REACT_APP_URL}/cart`, body, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        if (res.data.status === 0) {
          customToast("Hey !", "warning", res.data.message);
        } else {
          dispatch(getCartData());
          customToast("Hey !", "success", "Product quantity increased by 1");
        }
      })
      .catch((e): void => console.log(e.message));
  };

  return (
    <HStack mt={{ base: "0 !important", md: "-10 !important" }}>
      <Button
        borderRadius={"50%"}
        color="white"
        colorScheme={"teal"}
        size={["xs", "sm", "sm"]}
        onClick={() => handleAddToCartDEC(id)}
      >
        -
      </Button>
      <Button size={["xs", "sm", "sm"]} borderRadius={"50%"}>
        {qty}
      </Button>
      <Button
        borderRadius={"50%"}
        color="white"
        colorScheme={"teal"}
        size={["xs", "sm", "sm"]}
        onClick={() => handleAddToCartINC(id)}
      >
        +
      </Button>
    </HStack>
  );
};

export default QuantityButton;
