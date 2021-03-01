import useAnimate from "./useAnimate";

const useGrow = ({ transition, skip } = {}) => {
  return useAnimate({
    skip,
    from: {
      scale: 0,
    },
    to: {
      scale: 1,
    },
    transition: {
      duration: 0.5,

      ...transition,
    },
  });
};

export default useGrow;
