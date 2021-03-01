import {
  Box,
  Heading,
  VStack,
  List,
  Text,
  Link,
  Flex,
  Grid,
  Stack,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

import Section from "../ui/section";
import { partners } from "../../config.yaml";
import CustomIcon from "../ui/Icon";

import homeIcon from "@iconify/icons-vaadin/home";
import envelopeIcon from "@iconify/icons-vaadin/envelope";
import phoneIcon from "@iconify/icons-vaadin/phone-landline";

import AnimateList from "../transitions/AnimateList";
import useGrow from "../../hooks/useGrow";
import useSlideIn from "../../hooks/useSlideIn";
import useI18n from "../../hooks/useI18n";

const Contact = ({ background }) => {
  const [ref, slide] = useSlideIn({
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  });

  const { t } = useI18n();

  return (
    <Stack direction="row" as="section" id="contact" spacing={0}>
      <Box
        position="relative"
        px={[8, 8, 20, 16]}
        py={12}
        pb={20}
        flexShrink={0}
        w={{ base: "80%", md: "inherit" }}
      >
        <Section.Title sub="contact" mb={12}>
          {t("contact.title")}
        </Section.Title>

        <Box ref={ref}>
          <Heading
            as={motion.h2}
            animate={slide}
            mb={8}
            color="gray.700"
            fontSize="xl"
          >
            {t("contact.partners")}
          </Heading>
        </Box>

        <Stack
          justify="space-between"
          w="100%"
          spacing={12}
          direction={{ base: "column", sm: "row" }}
        >
          {partners.map((partner) => (
            <Partner key={partner.name} {...partner} />
          ))}
        </Stack>

        <Text fontSize="xs" color="gray.500" position="absolute" bottom={2}>
          {t("contact.footer")}
          <Link
            ml={1}
            _hover={{ color: "gray.600", textDecoration: "underline" }}
          >
            Elmar van Riet
          </Link>
        </Text>
      </Box>

      <Box
        display={{ base: "none", md: "block" }}
        flexGrow={1}
        minH="500px"
        bgPosition="bottom center"
        bgSize="cover"
        bgImage={background}
      />
    </Stack>
  );
};

const Partner = ({ name, address, email, phone }) => {
  const [ref, grow] = useGrow();

  return (
    <VStack align="start" spacing={4} ref={ref} flexShrink={0}>
      <Heading
        as={motion.h3}
        animate={grow}
        fontFamily="body"
        color="primary.darker"
        fontSize="xl"
      >
        {name}
      </Heading>
      <List as={AnimateList} spacing={4}>
        <Item icon={homeIcon}>{address}</Item>
        <Item icon={envelopeIcon}>{email}</Item>
        <Item icon={phoneIcon}>{phone}</Item>
      </List>
    </VStack>
  );
};

const Item = ({ icon, children, index }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: "100%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5 + 0.5 * index,
      },
    },
  };

  return (
    children && (
      <Flex as={motion.li} variants={variants}>
        <CustomIcon
          size={4}
          position="relative"
          bottom="2px"
          icon={icon}
          color="primary.main"
          mr={2}
        />

        <Text whiteSpace="pre-line">{children}</Text>
      </Flex>
    )
  );
};

export default Contact;
