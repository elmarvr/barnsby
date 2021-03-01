import { useEffect } from "react";
import {
  Box,
  Heading,
  List,
  ListItem,
  ListIcon,
  Flex,
  Stack,
} from "@chakra-ui/react";
import circle from "@iconify/icons-vaadin/circle";

import { motion } from "framer-motion";

import CustomIcon from "../ui/Icon";
import LinkButton from "../ui/LinkButton";
import Section from "../ui/section";

import useSlideIn from "../../hooks/useSlideIn";
import useGrow from "../../hooks/useGrow";
import useI18n from "../../hooks/useI18n";

const Hero = ({ background }) => {
  const { t } = useI18n();

  const slideRight = useSlideIn({ skip: true });
  const slideUp = useSlideIn({ skip: true, direction: "up" });
  const grow1 = useGrow({ skip: true });
  const grow2 = useGrow({ skip: true });

  useEffect(() => {
    const animate = async () => {
      await slideRight.animate();
      await slideUp.animate();
      await grow1.animate();
      await grow2.animate();
    };
    animate();
  }, []);

  return (
    <Section
      id="home"
      pt={{ base: 20, md: 24 }}
      pb={0}
      h="650px"
      bgImage={background}
      bgColor="#C6D3F9"
      bgPosition="center"
      bgSize="cover"
      bgBlendMode="multiply"
    >
      <Flex
        py={8}
        align={{ base: "center", sm: "start" }}
        justify={{ base: "space-between", sm: "center" }}
        direction="column"
        h={"100%"}
      >
        <Heading
          as={motion.h1}
          animate={slideRight}
          fontSize="4xl"
          variant="hero"
        >
          {t("hero.header")}
        </Heading>

        <Box
          as={motion.div}
          animate={slideUp}
          display={{ base: "none", sm: "block" }}
        >
          <Heading as="h2" variant="hero-sub">
            {t("hero.list.title")}
          </Heading>
          <List spacing={1} mb={12} pl={2}>
            <Item>{t("hero.list.items.0")}</Item>
            <Item>{t("hero.list.items.1")}</Item>
            <Item>{t("hero.list.items.2")}</Item>
          </List>
        </Box>

        <Stack
          w="100%"
          direction={{ base: "column", sm: "row" }}
          spacing={{ base: 8, sm: 4 }}
          justify={{ base: "center", sm: "start" }}
        >
          <LinkButton animate={grow1} to="#contact" variant="hero">
            {t("hero.buttons.0")}
          </LinkButton>

          <LinkButton animate={grow2} to="#sellers" variant="hero-secondary">
            {t("hero.buttons.1")}
          </LinkButton>
        </Stack>
      </Flex>
    </Section>
  );
};

const Icon = () => (
  <CustomIcon mr={2} color="primary.main" icon={circle} size={1} />
);

const Item = ({ children }) => {
  return (
    <ListItem color="white">
      <ListIcon as={Icon} />
      {children}
    </ListItem>
  );
};

export default Hero;
