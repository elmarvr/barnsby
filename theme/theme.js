import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    main: "#83CA04",
    dark: "#67A102",
    darker: "#406402",
    bg: "#335101",
  },
  gray: {
    900: "#151313",
    700: "#2B2727",
    600: "#403A3A",
    500: "#797979",
    100: "#D7D7D7",
    50: "#F5F4F4",
  },
};

const fonts = {
  heading: "'Merriweather', sans-serif",
  body: "'Source Sans Pro', sans-serif",
};

const components = {
  Heading: {
    variants: {
      hero: {
        color: { base: "white", lg: "primary.main" },
        fontWeight: "bold",
        maxW: "700px",
        mb: 8,
        textAlign: { base: "center", sm: "left" },
      },
      "hero-sub": {
        color: "white",
        fontFamily: "body",
        fontSize: "xl",
        fontWeight: "bold",
        mb: 1,
      },
    },
  },
  Button: {
    baseStyle: {
      rounded: "full",
    },
    variants: {
      hero: {
        fontWeight: "bold",
        display: "flex",
        bg: "primary.main",
        color: "white",
        mx: { base: "auto", sm: 0 },
        fontSize: { base: "xl", sm: "lg" },
        w: { base: 80, sm: 40 },
        py: { base: 8, sm: 6 },
        _hover: {
          bg: "primary.dark",
          cursor: "pointer",
        },
      },
      "hero-secondary": {
        fontWeight: "bold",
        display: "flex",
        color: "primary.main",
        bg: "white",
        mx: { base: "auto", sm: 0 },
        fontSize: { base: "xl", sm: "lg" },
        w: { base: 80, sm: 40 },
        py: { base: 8, sm: 6 },
        _hover: {
          bgColor: "gray.200",
          cursor: "pointer",
        },
      },
      "nav-link": ({ active }) => {
        return {
          display: "block",

          bg: "transparent",
          color: { base: "white", lg: active ? "primary.main" : "gray.500" },
          fontWeight: 600,
          p: 0,
          h: "auto",
          minW: 0,
          position: "relative",
          _hover: {
            color: "primary.dark",
            cursor: "pointer",
          },
          _after: {
            display: "block",
            position: "absolute",
            top: "25px",
            rounded: "full",

            content: "''",
            width: "100%",
            height: "2px",
            bg: "primary.main",
            opacity: { base: 0, lg: active ? 1 : 0 },
          },
        };
      },
      nav: ({ active }) => ({
        bg: {
          base: "white",
          lg: active ? "primary.dark" : "primary.main",
        },

        color: { base: "primary.main", lg: "white" },
        fontWeight: 600,
        h: 9,
        px: 4,
        ml: { base: 0, lg: 8 },
        position: "relative",
        _hover: {
          bg: "primary.darker",
          cursor: "pointer",
        },
      }),
      sellers: {
        fontWeight: "bold",
        display: "flex",
        bg: "primary.main",
        color: "white",
        fontSize: "lg",
        w: 40,
        py: 6,
        _hover: {
          bg: "primary.dark",
          cursor: "pointer",
        },
      },
    },
  },
  Menu: {
    baseStyle: {
      button: {
        color: { base: "white", lg: "gray.500" },
        minW: 12,
        w: 12,
        _focus: {
          boxShadow: "outline",
        },
        _hover: {
          color: { base: "primary.dark", lg: "primary.darker" },
        },
      },
      list: {
        color: "gray.600",
      },
    },
  },
};

const theme = extendTheme({ fonts, components, colors });

export default theme;
