import React from "react";

import {
  Box,
  Flex,
  Grid,
  Image,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import FooterHeading from "../molecules/FooterHeading";
import FooterTitle from "../molecules/FooterTitle";
import SocialIoncs from "../molecules/SocialIoncs";
import { useLocation } from "react-router-dom";

const company: Array<string> = [
  "About Us",
  "Careers",
  "Blog",
  "Partner with PharmEasy",
  "Sell at PharmEasy",
];

const services: Array<string> = [
  "Order Medicine",
  "Healthcare Products",
  "Lab Tests",
  "Find Nearest Collection Centre",
  "Surgeries",
];

const category: Array<string> = [
  "Covid Essentials",
  "Mega Clearance Sale",
  "Personal Care",
  "Healthcare Devices",
  "Health Food and Drinks",
  "Home Care",
  "Mother and Baby Care",
  "Skin Care",
  "Fitness Supplements",
  "Sexual Wellness",
  "Ayurvedic Care ",
  "Diabetic Care",
  "Health Condition",
  "Accessories & Wearables",
  "Elderly Care",
  "Top Products",
];

const help: Array<string> = [
  "Browse All Medicines",
  "Browse All Molecules",
  "Browse All Cities",
  "Browse All Areas",
  "Browse All Stores",
  "FAQ",
];

const faq: Array<string> = [
  "Editorial Policy",
  "Privacy Policy",
  "Vulnerability Disclosure Policy ",
  "Terms and Conditions",
  "Customer Support Policy",
  "Return Policy",
];

const Partners: Array<string> = [
  "https://assets.pharmeasy.in/apothecary/images/gpay.png?dim=1440x0",
  "https://assets.pharmeasy.in/apothecary/images/paytm.png?dim=1440x0",
  "https://assets.pharmeasy.in/apothecary/images/phonepe.png?dim=1440x0",
  "https://assets.pharmeasy.in/apothecary/images/amazon.png?dim=1440x0",
  "https://assets.pharmeasy.in/apothecary/images/mobikwik.png?dim=1440x0",
  "https://assets.pharmeasy.in/apothecary/images/olamoney.png?dim=1440x0",
  "https://assets.pharmeasy.in/apothecary/images/maestro.png?dim=1440x0",
  "https://assets.pharmeasy.in/apothecary/images/maestro.png?dim=1440x0",
  "https://assets.pharmeasy.in/apothecary/images/visa.png?dim=1440x0",
  "https://assets.pharmeasy.in/apothecary/images/rupay.png?dim=1440x0",
];
const Footer: React.FC = () => {
  const location = useLocation();

  return (
    <Box
      w="95%"
      m="auto"
      bg="#eef4ff"
      mt={{ base: "2rem", md: "3rem", lg: "4rem" }}
      display={location.pathname.includes("admin") ? "none" : "flex"}
    >
      <Box w="93%" m="auto" py="4rem" display={{ base: "none", lg: "block" }}>
        <Grid gridTemplateColumns="1fr 1fr 1fr .5fr" mb="3rem">
          <Box>
            <FooterHeading heading="Company" />
            <Box mt=".5rem" mb="2rem">
              {company.map((item: string, index: number) => {
                return <FooterTitle key={index} title={item} />;
              })}
            </Box>
            <FooterHeading heading="Our Services" />
            <Box mt=".5rem">
              {services.map((item: string, index: number) => {
                return <FooterTitle key={index} title={item} />;
              })}
            </Box>
          </Box>
          <Box>
            <FooterHeading heading="Featured Categories" />
            <Box mt=".5rem">
              {category.map((item: string, index: number) => {
                return <FooterTitle key={index} title={item} />;
              })}
            </Box>
          </Box>
          <Box>
            <FooterHeading heading="Need Help" />
            <Box mt=".5rem" mb="2rem">
              {help.map((item: string, index: number) => {
                return <FooterTitle key={index} title={item} />;
              })}
            </Box>
            <FooterHeading heading="Policy Info" />
            <Box mt=".5rem">
              {faq.map((item: string, index: number) => {
                return <FooterTitle key={index} title={item} />;
              })}
            </Box>
          </Box>
          <Box>
            <FooterHeading heading="Follow us on" />
            <Box mt="1rem">
              <SocialIoncs />
            </Box>
          </Box>
        </Grid>

        <Box mt="3rem">
          <FooterHeading heading="Our Payment Partners" />
          <Flex>
            <Flex
              mt="1rem"
              gap="2.5rem"
              w="55%"
              justifyContent="space-between"
              align="center"
            >
              {Partners.map((item: string, index: number) => {
                return (
                  <Box key={index}>
                    <Image src={item} alt="partnes" objectFit="cover" />
                  </Box>
                );
              })}
            </Flex>
            <Flex ml="auto">
              <Text color="" fontSize="14px" fontWeight="" fontFamily="Poppins">
                © 2022 PharmEasy. All Rights Reserved
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>

      {/* for mobile and tab*/}
      <Box px=".5rem" display={{ base: "", md: "", lg: "none" }} py="4rem">
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <FooterHeading heading="Company" />
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {company.map((item: string, index: number) => {
                return <FooterTitle key={index} title={item} />;
              })}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <FooterHeading heading="Our Services" />
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {services.map((item: string, index: number) => {
                return <FooterTitle key={index} title={item} />;
              })}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <FooterHeading heading="Featured Categories" />
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {category.map((item: string, index: number) => {
                return <FooterTitle key={index} title={item} />;
              })}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <FooterHeading heading="Need Help" />
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {help.map((item: string, index: number) => {
                return <FooterTitle key={index} title={item} />;
              })}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <FooterHeading heading="Policy Info" />
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {faq.map((item: string, index: number) => {
                return <FooterTitle key={index} title={item} />;
              })}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        {/* social icons */}
        <Box pl={{ base: "1rem", md: "" }} pt={{ base: "2rem" }}>
          <FooterHeading heading="Follow us on" />
          <Box mt="1rem">
            <SocialIoncs />
          </Box>
        </Box>

        {/* partners */}
        <Box mt="3rem">
          <FooterHeading heading="Our Payment Partners" />
          <Flex flexDirection="column">
            <Flex
              justifyContent="space-between"
              align="center"
              py="1rem"
              flexWrap="wrap"
              rowGap="1rem"
              columnGap="2rem"
            >
              {Partners?.map((item: string, index: number) => {
                return (
                  <Box key={index}>
                    <Image src={item} alt="partnes" objectFit="cover" />
                  </Box>
                );
              })}
            </Flex>
            <Flex>
              <Text color="" fontSize="14px" fontWeight="" fontFamily="Poppins">
                © 2022 PharmEasy. All Rights Reserved
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
