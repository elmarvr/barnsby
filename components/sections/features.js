import { HStack, VStack, Center, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import scale from "@iconify/icons-vaadin/scale";
import toolbox from "@iconify/icons-vaadin/toolbox";
import group from "@iconify/icons-vaadin/group";
import dollar from "@iconify/icons-vaadin/dollar";
import handshake from "@iconify/icons-vaadin/handshake";
import building from "@iconify/icons-vaadin/building";
import arrows from "@iconify/icons-vaadin/arrows-long-h";

import Section from "../ui/section";
import Icon from "../ui/Icon";
import AnimateList from "../transitions/AnimateList";

import useI18n from "../../hooks/useI18n";

const Features = () => {
  const { t } = useI18n();

  return (
    <Section id="features">
      <Section.Title sub={t("features.subtitle")} mb={12}>
        {t("features.title")}
      </Section.Title>
      <HStack
        as={AnimateList}
        spacing={6}
        width="100%"
        overflowX="auto"
        align="start"
      >
        <Feature icon={scale}>{t("features.items.0")}</Feature>
        <Feature icon={toolbox}>{t("features.items.1")}</Feature>
        <Feature icon={group}>{t("features.items.2")}</Feature>
        <Feature icon={dollar}>{t("features.items.3")}</Feature>
        <Feature icon={handshake}>{t("features.items.4")}</Feature>
        <Feature icon={building}>{t("features.items.5")}</Feature>
        <Feature icon={arrows}>{t("features.items.6")}</Feature>
      </HStack>
    </Section>
  );
};

const Feature = ({ icon, index, children }) => {
  const variants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.45,
        delay: 0.45 * index,
      },
    },
  };

  return (
    <VStack as={motion.li} variants={variants}>
      <Center rounded="md" w={24} h={24} bg="gray.50" mb={2}>
        <Icon icon={icon} size={10} color="primary.main" />
      </Center>
      <Text
        fontWeight="semibold"
        fontFamily="body"
        fontSize="lg"
        color="gray.700"
        align="center"
        w={36}
      >
        {children}
      </Text>
    </VStack>
  );
};

export default Features;
