import React, { ReactElement } from "react";
import {
  Box,
  Flex,
  Grid,
  Progress,
  Stack,
  useToast,
  Text,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { BiStar } from "react-icons/bi";
import { FaStarHalfAlt } from "react-icons/fa";
import { RiStarHalfSFill } from "react-icons/ri";
import { RiStarFill } from "react-icons/ri";
import { RiStarSmileFill } from "react-icons/ri";
import axios from "axios";

interface IProps {
  id: string;
}
interface IBody {
  type: string;
  star: number;
}

const Ratings: React.FC<IProps> = ({ id }) => {
  const toast = useToast();

  const rateThisProduct = (rating: number) => {
    let body: IBody = {
      type: "ratings",
      star: rating,
    };
    axios
      .patch(`http://localhost:8080/product/${id}`, body)
      .then((res) => {})
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <Box mt="1rem">
      <Text
        color="#212121"
        fontSize="18px"
        fontWeight="500"
        fontFamily="poppins"
        mb=".5rem"
      >
        Ratings & Reviews
      </Text>
      <Grid gridTemplateColumns=".5fr 1fr .5fr" h="auto" gap="1rem">
        <Box>
          <Flex justify="center">
            <Text
              color="#212121"
              fontSize="18px"
              fontWeight="500"
              fontFamily="poppins"
              textAlign="center"
              mt="-.3rem"
              mb=".5rem"
              mr=".3rem"
            >
              4.1
            </Text>
            <AiFillStar />
          </Flex>
          <Text
            color="#212121"
            fontSize="14px"
            fontWeight="400"
            fontFamily="poppins"
            textAlign="center"
          >
            985 Ratings & 142 Reviews
          </Text>
        </Box>
        <Box>
          <Stack spacing={5}>
            <Progress
              colorScheme="green"
              borderRadius="30px"
              size="xs"
              value={80}
            />
            <Progress
              colorScheme="green"
              borderRadius="30px"
              size="xs"
              value={75}
            />
            <Progress
              colorScheme="green"
              borderRadius="30px"
              size="xs"
              value={50}
            />
            <Progress
              colorScheme="red"
              borderRadius="30px"
              size="xs"
              value={20}
            />
          </Stack>
        </Box>
        <Box h="5rem" ml="auto">
          <Flex align="center" cursor="pointer">
            {data.map((item, i) => {
              return (
                <Flex
                  key={i}
                  onClick={() => {
                    rateThisProduct(i + 1);
                    toast({
                      title: `Your Rating is: ${i + 1}`,
                      position: "top",
                      description: "Thank you for your valuable Rating.",
                      status: `success`,
                      duration: 1000,
                      isClosable: true,
                    });
                  }}
                >
                  {item.icon}
                </Flex>
              );
            })}
          </Flex>

          <Text
            color="#212121"
            fontSize="14px"
            fontWeight="400"
            fontFamily="poppins"
            textAlign="center"
          >
            Rate Product
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default Ratings;

interface IString {
  rate: number;
  icon: ReactElement;
}

const data: IString[] = [
  { rate: 1, icon: <BiStar fontSize="21px" /> },
  { rate: 2, icon: <FaStarHalfAlt fontSize="18px" /> },
  { rate: 3, icon: <RiStarHalfSFill fontSize="25px" /> },
  { rate: 4, icon: <RiStarFill fontSize="20px" /> },
  { rate: 5, icon: <RiStarSmileFill fontSize="20px" /> },
];
