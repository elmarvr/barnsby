import { motion } from "framer-motion";
import { List as ChakraList, Grid, Heading, Text } from "@chakra-ui/react";
import check from "@iconify/icons-vaadin/check";

import AnimateList from "../transitions/AnimateList";
import CustomIcon from "./Icon";

const List = ({ ...props }) => {
  return <ChakraList spacing={8} as={AnimateList} {...props} />;
};

const ListItem = ({ ordered, children, index, title, ...props }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: "100%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.3 * index,
      },
    },
  };

  return (
    <Grid
      as={motion.li}
      variants={variants}
      templateColumns="auto 1fr"
      templateRows="auto 1fr "
      {...props}
    >
      {ordered ? (
        <Text
          mr={2}
          position="relative"
          top="5px"
          color="primary.main"
          fontWeight="bold"
          fontFamily="display"
          lineHeight="none"
          verticalAlign="middle"
          fontSize="lg"
        >
          {index + 1}
        </Text>
      ) : (
        <CustomIcon color="primary.main" icon={check} size={4} mr={2} />
      )}
      <Heading
        as="h3"
        fontWeight="semibold"
        fontSize="lg"
        color="gray.700"
        fontFamily="body"
        letterSpacing="wider"
      >
        {title}
      </Heading>
      <Text color="gray.600" gridColumn={2}>
        {children}
      </Text>
    </Grid>
  );
};

List.Item = ListItem;

export default List;
