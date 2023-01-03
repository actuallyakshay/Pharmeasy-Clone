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
import { AiOutlineLogin } from "react-icons/ai";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { AppState } from "../../Redux/Store";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { adminLogout } from "../../Redux/Auth/auth.actions";

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();
  const name: string = localStorage.getItem("name") || "";
  const role: string = localStorage.getItem("role") || "";

  const adminAuth = useSelector(
    (state: AppState) => state?.authReducer?.adminAuth
  );

  const handleLogout = () => {
    dispatch(adminLogout());
  };

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
          <Link
            onClick={() => navigate("/admin/dashboard")}
            display={
              role == "ProductManager"
                ? "none"
                : role == "Admin"
                ? "flex"
                : "none"
            }
          >
            Dashboard
          </Link>
          <Link onClick={() => navigate("/admin/products")}>Products</Link>
          <Link onClick={() => navigate("/admin/users")}>Users</Link>
          <Link
            onClick={() => navigate("/admin/trash")}
            display={role == "Admin" ? "none" : "flex"}
          >
            Trash
          </Link>
          <Link
            display={role !== "Admin" ? "none" : "flex"}
            onClick={() => navigate("/admin/createuser")}
          >
            Create User
          </Link>
        </HStack>
        <HStack display={{ base: "none", md: "flex" }}>
          <Avatar name={name} />
          <Text>{role}</Text>
          <Button
            fontSize={"20px"}
            fontWeight={200}
            variant={"link"}
            color="white"
            onClick={() => handleLogout()}
          >
            {adminAuth === false ? <AiOutlineLogin /> : <RiLogoutCircleLine />}
          </Button>
        </HStack>
      </Flex>
      <Divider />
    </Box>
  );
};
