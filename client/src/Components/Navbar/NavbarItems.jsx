import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Items from "../../molecules/Items";
import "../../App.css";

const data = [
  { link: "", url: "", title: "Medicine" },
  { link: "", url: "", title: "Lab Tests" },
  { link: "", url: "", title: "Healthcare" },
  { link: "", url: "", title: "Surgeries" },
  { link: "", url: "", title: "Health Blogs" },
  { link: "", url: "", title: "PLUS" },
  { link: "", url: "", title: "Offers" },
  { link: "", url: "", title: "Value Store" },
];

const NavbarItems = () => {
  return (
    <>
      <Flex w="90%" m="auto" align="center">
        <Flex w="54%" m="auto" justify="space-between" mt=".5rem">
          {data.map(({ title }) => {
            return (
              <Link to="/">
                <Items items={title} />
              </Link>
            );
          })}
        </Flex>
      </Flex>
    </>
  );
};

export default NavbarItems;
