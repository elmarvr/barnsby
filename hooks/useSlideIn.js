import useAnimate from "./useAnimate";

const slides = {
  left: {
    from: {
      x: "100%",
    },
    to: {
      x: 0,
    },
  },
  right: {
    from: {
      x: "-100%",
    },
    to: {
      x: 0,
    },
  },
  up: {
    from: {
      y: "100%",
    },
    to: {
      y: 0,
    },
  },
  down: {
    from: {
      y: "-100%",
    },
    to: {
      y: 0,
    },
  },
};

const useSlideIn = ({ direction, transition, opacity = true, skip } = {}) => {
  const { from, to } = slides[direction] || slides["right"];

  return useAnimate({
    skip,
    from: {
      opacity: opacity ? 0 : 1,
      ...from,
    },
    to: {
      opacity: 1,
      ...to,
    },
    transition: {
      type: "tween",
      duration: 0.5,
      ...transition,
    },
  });
};

export default useSlideIn;
