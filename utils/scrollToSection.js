import getHash from "./getHash";
import getBounds from "./getBounds";

const scrollToSection = (path, behavior = "smooth") => {
  const id = getHash(path);
  const navHeight = 84;

  const section = document.querySelector(id);

  if (section) {
    const sectionTop = getBounds(section).top;

    const y = sectionTop - navHeight + 1;
    window.scrollTo({ top: y, behavior });
  }
};

export default scrollToSection;
