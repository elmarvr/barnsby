import { useRef, forwardRef, useEffect } from "react";
import NextLink from "next/link";

import {
  Image,
  Flex,
  Button,
  Box,
  Heading,
  Text,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import open from "@iconify/icons-vaadin/menu";
import close from "@iconify/icons-vaadin/close";
import down from "@iconify/icons-vaadin/caret-down";

import Icon from "./Icon";
import CustomCollapse from "../transitions/CustomCollapse";
import LinkButton from "./LinkButton";
import Logo from "../../public/logo.svg";

import useNavigation from "../../hooks/useNavigation";
import useI18n from "../../hooks/useI18n";

const Navigation = ({ children }) => {
  const ref = useRef(null);
  const { initialize } = useNavigation();

  useEffect(() => {
    initialize(ref.current);
  }, []);

  return (
    <Flex
      ref={ref}
      zIndex={10}
      position="fixed"
      top={0}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={6}
      boxShadow="sm"
      bg={{ base: "primary.main", lg: "white" }}
    >
      <NavLogo />
      <NavToggle />

      <NavItems>{children}</NavItems>
    </Flex>
  );
};

const NavItems = ({ children }) => {
  const { isOpen, collapse } = useNavigation();

  return (
    <CustomCollapse
      transition={{ staggerChildren: 0.15 }}
      when={isOpen}
      collapse={collapse}
      flexBasis={{ base: "100%", lg: "auto" }}
      flexGrow={1}
    >
      <Stack
        spacing={4}
        alignItems="center"
        pt={{ base: 4, lg: 0 }}
        justify={["center", "center", "space-between", "start"]}
        direction={{ base: "column", md: "row" }}
      >
        {children}
      </Stack>
    </CustomCollapse>
  );
};

// Forward ref for NextLink
const NavItem = forwardRef((props, ref) => {
  const variants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return <Box ref={ref} as={motion.div} variants={variants} {...props} />;
});

const NavLink = ({ children, to, button }) => {
  const { isActive } = useNavigation();

  return (
    <NavItem>
      <LinkButton
        to={to}
        active={isActive(to)}
        variant={button ? "nav" : "nav-link"}
      >
        {children}
      </LinkButton>
    </NavItem>
  );
};

const NavToggle = () => {
  const { isOpen, toggle } = useNavigation();
  return (
    <Button
      variant="nav-link"
      display={{ base: "block", lg: "none" }}
      as="span"
      onClick={toggle}
    >
      <Icon size={5} icon={isOpen ? close : open} />
    </Button>
  );
};

const NavLogo = (props) => {
  return (
    <LinkButton
      to="/#home"
      variant="nav-link"
      fill={{ base: "white", lg: "primary.main" }}
      {...props}
    >
      <Logo />
    </LinkButton>
  );
};

const NavLocale = () => {
  const { locales, locale, setLocale } = useI18n();
  return (
    <NavItem flexShrink={0}>
      <Menu preventOverflow gutter={4}>
        {({ isOpen }) => (
          <>
            <MenuButton>
              <Text as="span" mr={1} display="inline-block">
                {locale().toUpperCase()}
              </Text>
              <Icon
                icon={down}
                as={motion.span}
                animate={{ rotate: isOpen ? 180 : 0 }}
              />
            </MenuButton>
            <MenuList minW="100px">
              {locales.map((locale) => (
                <MenuItem key={locale} onClick={() => setLocale(locale)}>
                  {locale.toUpperCase()}
                </MenuItem>
              ))}
            </MenuList>
          </>
        )}
      </Menu>
    </NavItem>
  );
};

Navigation.Locale = NavLocale;
Navigation.Link = NavLink;

export default Navigation;
