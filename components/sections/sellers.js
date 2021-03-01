import { VStack } from "@chakra-ui/react";

import Section from "../ui/section";
import List from "../ui/list";
import Image from "../ui/Image";
import LinkButton from "../ui/LinkButton";

import useGrow from "../../hooks/useGrow";
import useI18n from "../../hooks/useI18n";

const Sellers = () => {
  const { t } = useI18n();

  const [ref, grow] = useGrow({
    transition: {
      delay: 0.6,
    },
  });

  return (
    <Section.Split id="sellers">
      <Section.Title
        right
        textAlign={{ lg: "left" }}
        sub={t("sellers.subtitle")}
        gridColumn={{ base: 1, lg: 2 }}
      >
        {t("sellers.title")}
      </Section.Title>

      <Image src="/invest.svg" alt={t("sellers.image")} />

      <VStack spacing={8} alignItems="start">
        <List>
          <List.Item title={t("sellers.items.0.title")}>
            {t("sellers.items.0.content")}
          </List.Item>
          <List.Item title={t("sellers.items.1.title")}>
            {t("sellers.items.1.content")}
          </List.Item>
          <List.Item title={t("sellers.items.2.title")}>
            {t("sellers.items.2.content")}
          </List.Item>
          <List.Item title={t("sellers.items.3.title")}>
            {t("sellers.items.3.content")}
          </List.Item>
          <List.Item title={t("sellers.items.4.title")}>
            {t("sellers.items.4.content")}
          </List.Item>
        </List>
        <LinkButton animate={grow} ref={ref} variant="sellers" to="#contact">
          {t("sellers.button")}
        </LinkButton>
      </VStack>
    </Section.Split>
  );
};

export default Sellers;
