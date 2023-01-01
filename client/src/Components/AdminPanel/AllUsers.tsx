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
} from "@chakra-ui/react";
import axios from "axios";
import { AdminDashboard } from "./Dashboard";
import { IUser } from "../../@types/IUser";

const AllUsers: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [load, setload] = useState<boolean>(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    setload(true);
    axios.get(`${process.env.REACT_APP_URL}/user`).then((res) => {
      setUsers(res.data);
      setload(false);
    });
  };

  return (
    <>
      <AdminDashboard />
      <TableContainer>
        <Table size="sm" variant="simple">
          <Thead>
            <Tr>
              <Th>Username</Th>
              <Th>Phone Number</Th>
              <Th>PinCode</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users?.map((el, i) => {
              return (
                <Tr key={i}>
                  <Td>
                    <Text w="220px" overflow={"hidden"} textOverflow="ellipsis">
                      {el.name}
                    </Text>
                  </Td>
                  <Td>{el.phoneNumber}</Td>
                  <Td>{el.pinCode}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AllUsers;
