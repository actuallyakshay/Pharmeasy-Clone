import { useState } from "react";
import {
  Box,
  Text,
  Input,
  Stack,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import NavbarBorderBottom from "./NavbarBorderBottom";
import { FaPenNib } from "react-icons/fa";
import axios from "axios";

interface IBody {
  type?: string;
  user_name?: string;
  user_image?: string;
  title?: string;
}

interface IProps {
  id: string;
}

const ReviewPage: React.FC<IProps> = ({ id }) => {
  const [review, setReview] = useState<string>("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setReview(e.currentTarget.value);
  };

  const SubmitReview = (e: React.FormEvent) => {
    console.log("*****************************");
    e.preventDefault();
    let body: IBody = {
      type: "review",
      user_name: "manoj",
      title: "good product",
    };
    axios
      .patch(`http://localhost:8080/product/${id}`, body)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <Box mt="2rem">
      <NavbarBorderBottom />
      <Text
        fontSize="17px"
        fontWeight="600"
        fontFamily="poppins"
        color="#4f585e"
        mt="1rem"
      >
        Review Section
      </Text>

      <Box>
        <Stack spacing={3}>
          <form onSubmit={SubmitReview}>
            <InputGroup>
              <Input
                variant="filled"
                placeholder="write your review here..."
                value={review}
                onChange={handleChange}
              />
              <InputRightElement width="4.5rem">
                <Button colorScheme="teal" size="xs">
                  Add
                </Button>
              </InputRightElement>
            </InputGroup>
          </form>
        </Stack>
      </Box>
    </Box>
  );
};

export default ReviewPage;
