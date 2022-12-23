import { Box, Grid, Flex, Text, Image } from "@chakra-ui/react";
import Title from "../../molecules/Title";

const data = [
  {
    src: "https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0",
    title: "Medicine",
    discount: "upto 20% OFF",
  },
  {
    src: "https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0",
    title: "Lab Tests",
    discount: "upto 70% OFF",
  },
  {
    src: "https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0",
    title: "Healthcare",
    discount: "upto 60% OFF",
  },
  {
    src: "https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=256x0",
    title: "Sugeries",
    discount: "",
  },
  {
    src: "https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0",
    title: "Health Blogs",
    discount: "",
  },
  {
    src: "https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0",
    title: "PLUS ",
    discount: "SAVE 5% EXTRA",
  },
  {
    src: "https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0",
    title: "Offers",
    discount: "",
  },
  {
    src: "https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0",
    title: "Value Store",
    discount: "upto 20% OFF",
  },
];

const category = () => {
  return (
    <Box w="93%" m="auto" mt="3rem">
      <Grid gridTemplateColumns="repeat(8, 1fr)" columnGap="2rem">
        {data.map(({ src, title, discount }) => {
          return (
            <Flex
              key={src}
              flexDirection="column"
              _hover={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                borderRadius: "10px",
              }}
            >
              <Box mx="1rem" borderBottom=".1px solid #d1d3d5">
                <Image src={src} alt="" w="" h="" />
              </Box>
              <Box mt="1rem">
                <Title title={title} center="center" color="#30363c" />
              </Box>
              <Box mt=".5rem" pb=".3rem">
                <Text
                  fontSize="13px"
                  fontFamily="poppins"
                  fontWeight="600"
                  color="#f47779"
                  textAlign="center"
                  textTransform="uppercase"
                >
                  {discount}
                </Text>
              </Box>
            </Flex>
          );
        })}
      </Grid>
    </Box>
  );
};

export default category;
