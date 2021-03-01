import { VStack, Flex } from "@chakra-ui/react";

import Section from "../ui/section";
import List from "../ui/list";
import Image from "../ui/Image";

import useI18n from "../../hooks/useI18n";

const Buyers = () => {
  const { t } = useI18n();

  return (
    <Section.Split id="buyers" bgColor="gray.50">
      <Section.Title sub={t("buyers.subtitle")} gridColumn={1}>
        {t("buyers.title")}
      </Section.Title>

      <VStack gridColumn={1} spacing={8} alignItems="start">
        <List>
          <List.Item title={t("buyers.items.0.title")}>
            {t("buyers.items.0.content")}
          </List.Item>
          <List.Item title={t("buyers.items.1.title")}>
            {t("buyers.items.1.content")}
          </List.Item>
          <List.Item title={t("buyers.items.2.title")}>
            {t("buyers.items.2.content")}
          </List.Item>
        </List>
      </VStack>

      <Flex gridColumn={{ base: 1, lg: 2 }} gridRow={2} justify="end">
        <Image src="receipt.svg" alt={t("buyers.image")} maxHeight="300px" />
      </Flex>
    </Section.Split>
  );
};

export default Buyers;
