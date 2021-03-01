import { useEffect, useRef } from "react";
import { useAnimation } from "framer-motion";
import { useMount } from "react-use";

import useInView from "./useInView";

const useAnimate = ({ from, to, transition = {}, skip = false }) => {
  const [ref, inView] = useInView();

  const controls = useAnimation();

  controls.animate = async () => {
    await controls.start(to, transition);
  };

  useMount(() => {
    controls.set(from);
  });

  useEffect(() => {
    const animate = async () => {
      await controls.animate();
    };
    if (inView && !skip) {
      animate();
    }
  }, [inView]);

  if (skip) {
    return controls;
  }

  return [ref, controls];
};

export default useAnimate;
