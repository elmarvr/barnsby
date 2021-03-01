import { useRef, useEffect, useState } from "react";
import { useIntersection } from "react-use";

const useInView = ({ triggerOnce = true } = {}) => {
  const [state, set] = useState(false);
  const ref = useRef(null);
  const once = useRef(false);

  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      set(true);
      if (triggerOnce) {
        once.current = true;
      }
    } else {
      if (!once.current) {
        set(false);
      }
    }
  }, [intersection]);

  return [ref, state];
};

export default useInView;
