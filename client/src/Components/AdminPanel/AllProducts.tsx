import React, { useEffect, useState } from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Button,
  HStack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { AdminDashboard } from "./Dashboard";
import { IProduct } from "../../@types/IProduct";
import ViewProduct from "./ViewProd";
import UpdateProduct from "./UpdateItem";

const AllProducts: React.FC = () => {
  const [prod, setProd] = useState<IProduct[]>([]);
  const [load, setLoad] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const toast = useToast();

  const role: string = localStorage.getItem("role") || "";

  useEffect(() => {
    getalldata();
  }, [page]);

  const getalldata = (): void => {
    setLoad(true);
    axios
      .get(`${process.env.REACT_APP_URL}/product?page=${page}&limit=50`)
      .then((res) => {
        setLoad(false);
        setProd(res.data);
      });
  };

  return (
    <>
      <AdminDashboard />
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Prod. name</Th>
              <Th textAlign={"center"}>MRP</Th>
              <Th textAlign={"center"}>Discounted Price</Th>
              <Th textAlign={"center"}>% OFF</Th>
              <Th textAlign={"center"}>View prod.</Th>
              <Th
                textAlign={"center"}
                display={role == "ProductManager" ? "" : "none"}
              >
                Update prod.
              </Th>
              <Th
                display={role == "ProductManager" ? "" : "none"}
                textAlign={"center"}
              >
                Delete prod.
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {prod?.map((el: IProduct, i: number) => {
              return (
                <Tr key={el._id}>
                  <Td>
                    <Text w="220px" overflow={"hidden"} textOverflow="ellipsis">
                      {el.name}
                    </Text>
                  </Td>
                  <Td textAlign={"center"}>₹ {el.price2}</Td>
                  <Td textAlign={"center"}>₹ {el.price1}</Td>
                  <Td textAlign={"center"}>{el.off}%</Td>
                  <Td textAlign={"center"}>
                    <ViewProduct id={el._id} />
                  </Td>
                  <Td
                    display={role == "ProductManager" ? "" : "none"}
                    textAlign={"center"}
                  >
                    <UpdateProduct id={el._id} getalldata={getalldata} />
                  </Td>
                  <Td
                    display={role == "ProductManager" ? "" : "none"}
                    textAlign={"center"}
                  >
                    <Button
                      onClick={() => {
                        axios
                          .put(
                            `${process.env.REACT_APP_URL}/product/${el._id}`,
                            el
                          )
                          .then((res) => {
                            getalldata();
                            toast({
                              title: "Hey! Akshay ❤️",
                              description:
                                "Item has been deleted and added to the trash ! 🪣",
                              status: "warning",
                              position: "top",
                              duration: 2000,
                              isClosable: true,
                            });
                          });
                      }}
                      size="sx"
                    >
                      <AiFillDelete fontSize={"20px"} color="#7575fd" />
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <br />
      <HStack m="auto" alignItems={"center"} justifyContent="center">
        <Button
          disabled={page == 1 ? true : false}
          onClick={() => setPage(page - 1)}
          bg="#e7e7ff"
          borderRadius="0"
        >
          prev
        </Button>
        <Button borderRadius="0" bg="#cbcbf9">
          {page}
        </Button>
        <Button onClick={() => setPage(page + 1)} bg="#e7e7ff" borderRadius="0">
          next
        </Button>
      </HStack>
    </>
  );
};

export default AllProducts;
