import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import LabTestCarousel from "../../molecules/LabTestCarousel";
import LabCard from "./LabCard";

// carousel data

const data = [
  "https://cms-contents.pharmeasy.in/banner/077b535cbfd-3_HP_634x274.jpg",
  "https://cms-contents.pharmeasy.in/banner/ab56cb3731b-Diag_Superfast_Cat_634-x-274_v3.jpg",
  "https://cms-contents.pharmeasy.in/banner/03438c566ea-Booking-Lab-Tests_HP_634x274.jpg",
  "https://cms-contents.pharmeasy.in/banner/a34fe7e6b8d-600.jpg",
  "https://cms-contents.pharmeasy.in/banner/e2829ee51fc-COMBO1000.jpg",
  "https://cms-contents.pharmeasy.in/banner/c2c34b1f64f-surgicaregeneric.jpg",
];

const LabTestPage = () => {
  return (
    <Box
      w={{ base: "95%", md: "90%", lg: "70%" }}
      m="auto"
      my={{ base: "1.5rem", md: "2rem", lg: "2.5rem" }}
    >
      {/* carousel */}
      <Box>
        <LabTestCarousel data={data} top="45%" />
      </Box>
      <Flex
        py="2rem"
        justifyContent="center"
        align={{ base: "center", lg: "unset" }}
        gap="2rem"
        flexDirection={{ base: "column", lg: "unset" }}
      >
        <LabCard
          src="https://assets.pharmeasy.in/web-assets/dist/6b3d644c.svg"
          text="All Tests"
          category="labtest"
          link="/product/labtest/alltest"
        />
        <LabCard
          src="https://assets.pharmeasy.in/web-assets/dist/dea295a0.svg"
          text="Health Packages"
          category="healthPackages"
          link="/product/labtest/health-care-packages"
        />
      </Flex>
    </Box>
  );
};

export default LabTestPage;
