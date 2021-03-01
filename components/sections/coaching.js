import { Box, Text, Flex } from "@chakra-ui/react";

import Section from "../ui/section";
import List from "../ui/list";
import Image from "../ui/Image";
import useI18n from "../../hooks/useI18n";

const Coaching = () => {
  const { t } = useI18n();

  return (
    <Section.Split
      id="coaching"
      bgColor="gray.50"
      spacingY={{ base: 12, lg: 4 }}
    >
      <Box>
        <Section.Title sub={t("coaching.subtitle")} mb={4}>
          {t("coaching.title")}
          <Text
            whiteSpace="pre-line"
            color="gray.600"
            fontSize="sm"
            fontWeight="normal"
            fontFamily="body"
            mt={4}
          >
            {t("coaching.text")}
          </Text>
        </Section.Title>
      </Box>

      <Image
        src="business-decision.svg"
        gridRow={2}
        gridColumn={{ base: 1, lg: 2 }}
        alt={t("coaching.image")}
      />

      <List spacing={4} gridRow={{ base: 3, lg: 2 }} gridColumn={1}>
        <List.Item title={t("coaching.items.0")} />
        <List.Item title={t("coaching.items.1")} />
        <List.Item title={t("coaching.items.2")} />
        <List.Item title={t("coaching.items.3")} />
        <List.Item title={t("coaching.items.4")} />
        <List.Item title={t("coaching.items.5")} />
        <List.Item title={t("coaching.items.6")} />
      </List>
    </Section.Split>
  );
};

export default Coaching;
