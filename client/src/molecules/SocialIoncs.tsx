import { Grid } from "@chakra-ui/react";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import React from "react";

const SocialIoncs: React.FC = () => {
  return (
    <Grid gridTemplateColumns="repeat(4, 1fr)">
      <IoLogoInstagram fontSize="25px" />
      <FaFacebook fontSize="25px" />
      <GrYoutube fontSize="25px" />
      <FaTwitter fontSize="25px" />
    </Grid>
  );
};

export default SocialIoncs;
