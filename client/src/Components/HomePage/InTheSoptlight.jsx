import { Box } from "@chakra-ui/react";
import ProductHeading from "../../molecules/ProductHeading";
import ProductDetailsCarousel from "../../molecules/ProductDetailsCarousel";

const data = [
  {
    src: "https://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-gluco-one-bg-03-glucometer-test-strips-box-of-50-1-1669655233.jpg?dim=1440x0",
    title: "Dr Morepen Gluco One Bg 03 Glucometer Test",
    mrp: "849",
    price: "645",
    off: "24",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1670824840.jpg?dim=1440x0",
    title: "LEverherb Karela Jamun Juice",
    mrp: "399",
    price: "207",
    off: "48",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/products_otc/207833/calcimax-forte-plus-strip-of-30-tablets-2-1669616965.jpg?dim=1440x0",
    title: "Calcimax Forte Plus Strip Of 30 Tablets",
    mrp: "285",
    price: "228",
    off: "20",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/products_otc/031531/calcimax-500-health-supplement-tablets-500-mg-of-calcium-box-of-30-2-1669619405.jpg?dim=1440x0",
    title: "Calcimax 500 Health Supplement Tablets",
    mrp: "380",
    price: "304",
    off: "20",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/products_otc/K78780/pharmeasy-pill-box-organizer-2-1669349726.jpg?dim=1440x0",
    title: "Pharmeasy Pill Box Organizer",
    mrp: "499",
    price: "199",
    off: "60",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/products_otc/I47496/hansaplast-patch-bandage-jar-of-50-2-1669711117.jpg?dim=1440x0",
    title: "Hansaplast Patch Bandage Jar Of 50",
    mrp: "110",
    price: "81.40",
    off: "26",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/products_otc/J51815/liveasy-wellness-apple-cider-vinegar-with-mother-improves-metabolism-500ml-bottle-2-1654165611.jpg?dim=1440x0",
    title: "Liveasy Wellness Apple Cider Vinegar With",
    mrp: "649",
    price: "324",
    off: "50%",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/products_otc/270382/scalpe-plus-anti-dandruff-shampoo-bottle-of-75-ml-2-1669616723.jpg?dim=1440x0",
    title: "Scalpe Plus Anti Dandruff Shampoo",
    mrp: "280",
    price: "151.20",
    off: "46",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/products_otc/181140/vicks-vaporub-50ml-relief-from-cold-cough-headache-and-body-pain-2-1669655242.jpg?dim=1440x0",
    title: "Vicks Vaporub 50ml Relief From Cold",
    mrp: "155",
    price: "148",
    off: "4",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/products_otc/I46397/cetaphil-moisturising-lotion-500ml-2-1669711088.jpg?dim=1440x0",
    title: "Cetaphil Moisturising Lotion - 500ml",
    mrp: "1300",
    price: "1027",
    off: "21",
  },
];

const InTheSoptlight = () => {
  return (
    <Box w="100%" m="auto" mt="3rem" position="relative">
      <Box
        w="100%"
        h="25rem"
        top="0"
        position="absolute"
        zIndex="-10"
        backgroundImage="url(https://assets.pharmeasy.in/apothecary/images/spotlightBig.svg)"
        backgroundRepeat="no-repeat"
      />
      <Box w="93%" m="auto" zIndex="200">
        <Box mb="2rem" pt="2rem">
          <ProductHeading heading="In the Spotlight" />
        </Box>
        <ProductDetailsCarousel
          data={data}
          slidesToShow="7"
          top="25%"
          bg="white"
        />
      </Box>
    </Box>
  );
};

export default InTheSoptlight;
