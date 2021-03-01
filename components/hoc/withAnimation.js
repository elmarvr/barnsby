import { forwardRef } from "react";

import { motion } from "framer-motion";

//Some chakra components dont work very well with as={motion.el} this wraps them in a motion component

const withAnimation = (Component) =>
  forwardRef(({ initial, animate, variants, transition, ...props }, ref) => {
    if (animate) {
      return (
        <motion.span
          ref={ref}
          initial={initial}
          animate={animate}
          variants={variants}
          transition={transition}
        >
          <Component {...props} />
        </motion.span>
      );
    }

    return <Component ref={ref} {...props} />;
  });

export default withAnimation;
