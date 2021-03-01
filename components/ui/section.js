import { useRef } from "react";
import { Heading, Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

import useSlideIn from "../../hooks/useSlideIn";

const Section = ({
  id,
  children,
  responsiveBackground,
  bgColor,
  bgBlendMode,
  bgImage,
  bgSize,
  bgPosition,
  bgAttachment,
  ...props
}) => {
  return (
    <Flex
      id={id}
      as="section"
      bgColor={bgColor}
      bgBlendMode={bgBlendMode}
      bgImage={bgImage}
      bgSize={bgSize}
      bgPosition={bgPosition}
      bgAttachment="fixed"
      w="100%"
      justify="center"
    >
      <SimpleGrid
        direction="column"
        py={12}
        px={[8, 8, 20, 16]}
        w="100%"
        maxW="1400px"
        justify={{ base: "start", sm: "center" }}
        align={{ base: "center", sm: "start" }}
        {...props}
      >
        {children}
      </SimpleGrid>
    </Flex>
  );
};

const Title = ({ alt, sub, children, right, ...props }) => {
  const [ref, animate] = useSlideIn({
    direction: right ? "left" : "right",
    transition: {
      duration: 0.6,
    },
  });

  return (
    <Box ref={ref} {...props}>
      <Box animate={animate} as={motion.div}>
        <Heading
          as="h2"
          fontSize="lg"
          fontFamily="body"
          fontWeight="semibold"
          color="primary.main"
          letterSpacing="widest"
          mb={1}
        >
          {sub}
        </Heading>
        <Heading
          as="h1"
          color={alt ? "white" : "gray.900"}
          fontSize={{ base: "2xl", sm: "3xl" }}
        >
          {children}
        </Heading>
      </Box>
    </Box>
  );
};

Section.Title = Title;

Section.Split = (props) => (
  <Section
    columns={{ base: 1, lg: 2 }}
    spacingX={16}
    spacingY={12}
    {...props}
  />
);

export default Section;
