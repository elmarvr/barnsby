const getBounds = (node) => {
  if (node) {
    const {
      top,
      bottom,
      left,
      right,
      height,
      width,
    } = node.getBoundingClientRect();

    return {
      top: top + window.scrollY,
      bottom: bottom + window.scrollY,
      left: left + window.scrollX,
      right: right + window.scrollX,
      width,
      height,
    };
  }
  return {};
};

export default getBounds;
