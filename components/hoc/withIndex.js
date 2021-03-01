import { Children, cloneElement } from "react";

const withIndex = (children) => {
  return Children.map(children, (child, index) =>
    cloneElement(child, { index })
  );
};

export default withIndex;
