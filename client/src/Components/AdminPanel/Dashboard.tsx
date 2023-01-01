import React, { ReactNode } from "react";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Link,
  Text,
  Image,
  Button,
  Divider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Flex
        position={"sticky"}
        top="0"
        zIndex={5}
        justifyContent={"space-between"}
        bgColor="teal"
        color="white"
        px={5}
        py="3"
      >
        <Box w="200px" _hover={{ cursor: "pointer" }}>
          <Image
            src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png?dim=360x0"
            w="60%"
          />
        </Box>
        <HStack gap={{ base: "2", sm: "2", md: "5", lg: "12" }}>
          <Link onClick={() => navigate("/admin/dashboard")}>Dashboard</Link>
          <Link onClick={() => navigate("/admin/products")}>Products</Link>
          <Link onClick={() => navigate("/admin/users")}>Users</Link>
          <Link onClick={() => navigate("/admin/trash")}>Trash</Link>
          <Link>Create User</Link>
        </HStack>
        <HStack display={{ base: "none", md: "flex" }}>
          {/* <Avatar name={name} /> */}
          <Text>role</Text>
          <Button
            fontSize={"sm"}
            fontWeight={200}
            variant={"link"}
            color="black"
            // leftIcon={isAuth ? <AiOutlineLogin /> : <RiLogoutCircleLine />}
          ></Button>
        </HStack>
      </Flex>
      <Divider />
    </Box>
  );
};
