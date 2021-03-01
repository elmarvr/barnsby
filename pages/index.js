import _ from "lodash";
import { Box } from "@chakra-ui/react";

import Hero from "../components/sections/hero";
import Header from "../components/sections/header";
import Features from "../components/sections/features";
import Sellers from "../components/sections/sellers";
import Buyers from "../components/sections/buyers";
import Steps from "../components/sections/steps";
import Coaching from "../components/sections/coaching";
import Contact from "../components/sections/contact";

import { getResponsiveBackground, getLocales } from "../lib/api";

const Home = ({ backgrounds }) => {
  return (
    <Box overflowX="hidden">
      <Header />

      <Hero background={backgrounds.hero} />

      <Features />

      <Sellers />

      <Buyers />

      <Steps />

      <Coaching />

      <Contact background={backgrounds.contact} />
    </Box>
  );
};

export const getStaticProps = async (context) => {
  const locales = getLocales();
  const table = require(`../i18n/nl.yaml`);

  return {
    props: {
      locales,
      table,
      backgrounds: {
        hero: getResponsiveBackground("/barnsby.webp"),
        contact: getResponsiveBackground("/contact.webp"),
      },
    },
  };
};

export default Home;
