import { Image as ChakraImage } from "@chakra-ui/react";
import { motion } from "framer-motion";

import useGrow from "../../hooks/useGrow";

const Image = ({ heightAuto, ...props }) => {
  const [ref, animate] = useGrow({
    transition: {
      duration: 1,
      bounce: 0.5,
    },
  });

  return (
    <ChakraImage
      ref={ref}
      as={motion.img}
      animate={animate}
      maxW="600px"
      px={{ base: 0, sm: 8, md: 20, lg: 0 }}
      w="80%"
      h="auto"
      alignSelf={{ base: "left", lg: "center" }}
      {...props}
    />
  );
};

export default Image;
