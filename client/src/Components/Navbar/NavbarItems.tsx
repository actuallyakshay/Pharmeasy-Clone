import React from "react";
import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Items from "../../molecules/Items";

interface IData {
  link: string;
  url: string;
  title: string;
}

const data: IData[] = [
  { link: "/product/medicine", url: "", title: "Medicine" },
  { link: "/product/labtest", url: "", title: "Lab Tests" },
  { link: "/product/healthcare", url: "", title: "Healthcare" },
  { link: "", url: "", title: "Surgeries" },
  { link: "", url: "", title: "Health Blogs" },
  { link: "", url: "", title: "PLUS" },
  { link: "", url: "", title: "Offers" },
  { link: "", url: "", title: "Value Store" },
];

const NavbarItems: React.FC = () => {
  return (
    <Flex w="90%" m="auto" align="center">
      <Flex w="54%" m="auto" justify="space-between" mt=".5rem">
        {data.map(({ title, link }: IData) => {
          return (
            <Link key={title} to={link}>
              <Items items={title} />
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default NavbarItems;
