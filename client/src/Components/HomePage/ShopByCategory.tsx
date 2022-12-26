import { Box } from "@chakra-ui/react";
import React from "react";
import CardCarousel from "../../molecules/CardCarousel";
import ProductHeading from "../../molecules/ProductHeading";

export interface IDataShopByCat {
  src: string;
  link: string;
  category: string;
}

const data: IDataShopByCat[] = [
  {
    src: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/a7a03f6764393c65bab22e56de576a59.png?f=png?dim=256x0",
    link: "",
    category: "Mega clearance sale",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/1e622b0308ec3ab48887512eaa3488a5.png?f=png?dim=256x0",
    link: "",
    category: "Personal care",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/cfc8ee511609321e91eb86a34f5b2885.png?f=png?dim=256x0",
    link: "",
    category: "Healthcare devices",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/335dae76832d370c94f0440f5ba89e1f.png?f=png?dim=256x0",
    link: "",
    category: "Health food and drinks",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/dc96175686f135b5a22d1e57165d0246.png?f=png?dim=256x0",
    link: "",
    category: "Home care",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f692f7243b8036ed97d99a7973dd42b3.png?f=png?dim=256x0",
    link: "",
    category: "Mother and baby care",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/514d0d7d01a63502b4ebfec9ae26f4d2.png?f=png?dim=256x0",
    link: "",
    category: "Skin care",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ecad9a974e003fb987858b3ee81413c6.png?f=png?dim=256x0",
    link: "",
    category: "Sexual wellness",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/105ceca515ee30509f93309ae75306aa.png?f=png?dim=256x0",
    link: "",
    category: "Ayurvedic care",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b1a199bf20a9325798872b8685114856.png?f=png?dim=256x0",
    link: "",
    category: "Diabetic care",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/a7a03f6764393c65bab22e56de576a59.png?f=png?dim=256x0",
    link: "",
    category: "Health condition",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/763b558b32313005bc11d0cae0e26f58.png?f=png?dim=256x0",
    link: "",
    category: "Accessories & wearables",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/fa936f30b4563fc4abd187fb22fe5258.png?f=png?dim=256x0",
    link: "",
    category: "Elderly care",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png?f=png?dim=256x0",
    link: "",
    category: "Top products",
  },
];

const ShopByCategory: React.FC = () => {
  return (
    <Box w="93%" m="auto" mt="3rem">
      <Box mb="2rem">
        <ProductHeading heading="Shop by Categories" />
      </Box>
      <CardCarousel data={data} slidesToShow="8" top="25%" />
    </Box>
  );
};

export default ShopByCategory;
