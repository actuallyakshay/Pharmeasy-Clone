import { Box, Text } from "@chakra-ui/react";
import ProductDetailsCarousel from "../../molecules/ProductDetailsCarousel";
import ProductHeading from "../../molecules/ProductHeading";

interface IData {
  src: string;
  title: string;
  mrp: string;
  price: string;
  off: string;
}

const data:IData[] = [
  {
    src: "https://cdn01.pharmeasy.in/dam/products_otc/O80793/pharmeasy-ironfolic-acid-with-zinc-vitamin-c-b12-maintains-overall-health-bottle-of-60-2-1668672053.jpg?dim=1440x0",
    title: "Pharmeasy Iron+folic Acid With Zinc,Vitamin",
    mrp: "599",
    price: "299",
    off: "50",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/products_otc/X79195/liveasy-surgicals-rolled-bandage-pack-of-12-10cmx3mt-2-1653648101.jpg?dim=1440x0",
    title: "Liveasy Surgical's Rolled Bandage Pack...",
    mrp: "345",
    price: "",
    off: "",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/products_otc/E52686/liveasy-surgicals-rolled-bandage-pack-of-12-5cm-x-3mt-2-1653648071.jpg?dim=1440x0",
    title: "Liveasy Surgical's Rolled Bandage Pack...",
    mrp: "185",
    price: "",
    off: "",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/products_otc/K49952/dettol-neem-bathing-soap-bar-with-pure-neem-oil-75g-buy-3-get-1-free-combo-offer-on-bath-soap-2-1664184591.jpg?dim=1440x0",
    title: "Dettol Neem Bathing Soap Bar With Pure...",
    mrp: "135",
    price: "",
    off: "",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/products_otc/D57107/baidyanath-nagpur-shankhapushpi-syrup-200-ml-pack-of-2-2-1655533849.jpg?dim=1440x0",
    title: "Baidyanath Nagpur Shankhapushpi Syrup...",
    mrp: "220",
    price: "198",
    off: "10",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/products_otc/T53840/manforce-xtasy-condomsblack-grapes-10s-2-1666067125.jpg?dim=1440x0",
    title: "Manforce Xtasy Condoms(black...",
    mrp: "120",
    price: "102",
    off: "15",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/products_otc/G17995/mamypoko-pants-extra-absorb-diapers-extra-large-32-diapers-2-1666152484.jpg?dim=1440x0",
    title: "Mamypoko Pants Extra Absorb Diapers (extr...",
    mrp: "799",
    price: "",
    off: "",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/products_otc/W60642/complan-nutrigro-chocolate-refill-400-gm-2-1671202266.jpg?dim=1440x0",
    title: "Complan Nutrigro Chocolate Refill 400...",
    mrp: "595",
    price: "446",
    off: "25",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/products_otc/A47907/nicotex-nicotine-patch-7mg-7-patches-2-1660989963.jpg?dim=1440x0",
    title: "Nicotex Nicotine Patch 7mg (7 Patches)",
    mrp: "599",
    price: "",
    off: "",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/products_otc/V63537/curaprox-cs-5460-toothbrush-ultra-soft-pack-of-1-2-1663583743.jpg?dim=1440x0",
    title: "Curaprox Cs 5460 Toothbrush Ultra Soft...",
    mrp: "525",
    price: "",
    off: "",
  },
];

const NewLaunches:React.FC = () => {
  return (
    <Box w="93%" m="auto" mt="3rem">
      <Box mb="2rem">
        <ProductHeading heading="New Launches" />
        <Text
          mt=".3rem"
          color="#4f585e"
          fontWeight="400"
          fontFamily="poppins"
          fontSize="15px"
        >
          New wellness range just for you!
        </Text>
      </Box>
      <ProductDetailsCarousel data={data} slidesToShow="7" top="25%" />
    </Box>
  );
};

export default NewLaunches;
