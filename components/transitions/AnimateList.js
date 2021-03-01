import { motion } from "framer-motion";

import withIndex from "../hoc/withIndex";
import useInView from "../../hooks/useInView";

const AnimateList = ({ children, ordered, ...props }) => {
  const [ref, inView] = useInView();

  const List = ordered ? motion.ol : motion.ul;

  return (
    <List
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      {...props}
    >
      {withIndex(children)}
    </List>
  );
};

export default AnimateList;
