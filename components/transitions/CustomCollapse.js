import { chakra, Box } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const Container = chakra(motion.div);

const CustomCollapse = ({ children, when, collapse, transition, ...props }) => {
  const variants = {
    visible: {
      height: "auto",
      transition: {
        type: "spring",
        ...transition,
      },
    },
    hidden: {
      height: 0,
      transition: {
        type: "tween",
        duration: 0.4,
      },
    },
  };

  if (!collapse) {
    return <Box {...props}>{children}</Box>;
  }

  return (
    <AnimatePresence>
      {when && (
        <Container
          {...props}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
        >
          {children}
        </Container>
      )}
    </AnimatePresence>
  );
};

export default CustomCollapse;
