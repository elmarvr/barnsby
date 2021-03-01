import { Stack } from "@chakra-ui/react";

import Nav from "../ui/navigation";
import useI18n from "../../hooks/useI18n";

const Header = () => {
  const { t } = useI18n();
  return (
    <Nav>
      <Stack
        mx={{ base: 0, lg: "auto" }}
        spacing={4}
        direction={{ base: "column", md: "row" }}
        align="center"
      >
        <Nav.Link active to="/#home">
          {t("header.items.0")}
        </Nav.Link>
        <Nav.Link to="/#features">{t("header.items.1")}</Nav.Link>
        <Nav.Link to="/#sellers">{t("header.items.2")}</Nav.Link>
        <Nav.Link to="/#buyers">{t("header.items.6")}</Nav.Link>
        <Nav.Link to="/#steps">{t("header.items.3")}</Nav.Link>
        <Nav.Link to="/#coaching">{t("header.items.5")}</Nav.Link>
      </Stack>

      <Stack
        align="center"
        spacing={4}
        direction={{ base: "column", md: "row" }}
      >
        <Nav.Link button to="/#contact">
          {t("header.items.4")}
        </Nav.Link>
        <Nav.Locale />
      </Stack>
    </Nav>
  );
};

export default Header;
