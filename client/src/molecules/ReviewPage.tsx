import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import NavbarBorderBottom from "./NavbarBorderBottom";
import { FaPenNib } from "react-icons/fa";
import { RiUserLine } from "react-icons/ri";
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

const month: string[] = [
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const d = new Date();

// get month
let m = d.getMonth();
let currentMonth = month[m - 1];

// get day
let date = d.getDate();

const ReviewPage: React.FC<IProps> = ({ id }) => {
  const [review, setReview] = useState<string>("");
  const [collectReviews, setCollectReviews] = useState<IBody[]>([]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setReview(e.currentTarget.value);
  };

  const SubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    let body: IBody = {
      type: "reviews",
      user_name: "Manoj Rathod",
      title: review,
    };
    axios
      .patch(`${process.env.REACT_APP_URL}/product/${id}`, body)
      .then((res) => {
        getReviews();
        setReview("");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const getReviews = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/product/${id}`)
      .then((res) => {
        setCollectReviews(res.data.reviews);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  useEffect(() => {
    getReviews();
  }, [id]);

  return (
    <Box mt="2rem">
      <NavbarBorderBottom />
      <Text
        fontSize="17px"
        fontWeight="600"
        fontFamily="poppins"
        color="#4f585e"
        mt="1rem"
        mb="1rem"
      >
        Product Review Section
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
                <FaPenNib />
              </InputRightElement>
            </InputGroup>
          </form>
        </Stack>
      </Box>
      <Box mt="2rem">
        {collectReviews?.reverse().map((item, i) => {
          return (
            <Box key={i} bg="#e2e8f0" p="1rem" borderRadius="10px" my=".5rem">
              <Flex align={"center"}>
                <RiUserLine fontSize="16px" />
                <Flex ml="1rem" align={"center"}>
                  <Text
                    fontSize="14px"
                    fontWeight="600"
                    fontFamily="poppins"
                    color="#212121"
                  >
                    {item.user_name}
                  </Text>
                  <Text
                    fontSize="13px"
                    fontWeight="600"
                    fontFamily="poppins"
                    color="#4f585e"
                    ml="1rem"
                  >
                    Date:-
                    <span
                      style={{
                        color: "#4f585e",
                        fontWeight: "600",
                        marginLeft: ".3rem",
                      }}
                    >{`${date}  ${currentMonth}`}</span>
                  </Text>
                </Flex>
              </Flex>
              <Text fontSize="15px" fontWeight="400" pl="1.9rem">
                {item.title}
              </Text>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ReviewPage;
