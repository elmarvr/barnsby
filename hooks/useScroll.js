import { useRef, useEffect } from "react";
import { useViewportScroll, useTransform, transform } from "framer-motion";
import { useBreakpointValue } from "@chakra-ui/react";
import { isFirefox, isChrome } from "react-device-detect";

const useScroll = () => {
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();
  const scroll = useBreakpointValue({ base: false, lg: true });

  useEffect(() => {
    scrollY.set(window.scrollY - 1);
  }, []);

  const getOffset = (node) => {
    const scrollOffset = isFirefox ? window.innerHeight : 85;
    if (node) {
      return node.offsetTop + node.offsetHeight - scrollOffset;
    }
  };

  const y = useTransform(scrollY, (value) => {
    if (ref.current && scroll) {
      const min = getOffset(ref.current);
      const max = getOffset(ref.current.parentElement);

      const distance = max - min - isChrome * 220;

      const input = [min, max + distance * 0.5];
      const output = [0, distance];

      const transformed = transform(value, input, output);

      if (transformed <= distance) {
        return transformed;
      }
    }
    return 0;
  });

  return [ref, y];
};

export default useScroll;
