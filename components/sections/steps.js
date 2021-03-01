import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

import Section from "../ui/section";
import List from "../ui/list";
import Image from "../ui/Image";

import useScroll from "../../hooks/useScroll";
import useI18n from "../../hooks/useI18n";

const Steps = () => {
  const [ref, y] = useScroll();
  const { t } = useI18n();

  return (
    <Section.Split id="steps">
      <Section.Title
        right
        gridColumn={{ base: 1, lg: 2 }}
        sub={t("steps.subtitle")}
      >
        {t("steps.title")}
      </Section.Title>
      <List
        ordered
        gridColumn={{ base: 1, lg: 2 }}
        gridRow={{ base: 3, lg: 2 }}
      >
        <List.Item ordered title={t("steps.items.0.title")}>
          {t("steps.items.0.content")}
        </List.Item>
        <List.Item ordered title={t("steps.items.1.title")}>
          {t("steps.items.1.content")}
        </List.Item>
        <List.Item ordered title={t("steps.items.2.title")}>
          {t("steps.items.2.content")}
        </List.Item>
        <List.Item ordered title={t("steps.items.3.title")}>
          {t("steps.items.3.content")}
        </List.Item>
        <List.Item ordered title={t("steps.items.4.title")}>
          {t("steps.items.4.content")}
        </List.Item>
        <List.Item ordered title={t("steps.items.5.title")}>
          {t("steps.items.5.content")}
        </List.Item>
      </List>
      <Box gridRow={2}>
        <Box as="span" ref={ref}>
          <Image
            as={motion.img}
            style={{ display: "flex", y }}
            alt={t("steps.image")}
            src="marketing.svg"
          />
        </Box>
      </Box>
    </Section.Split>
  );
};

export default Steps;
