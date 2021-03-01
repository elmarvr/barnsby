import { useEffect, useState } from "react";

const useSection = () => {
  const [state, set] = useState([]);

  const upsertSection = (entry) => {
    const id = entry.target.id;
    const ratio = entry.intersectionRatio;

    set((prev) => {
      if (prev) {
        const index = prev.findIndex((section) => section.id === id);

        if (index !== -1) {
          const _prev = [...prev];
          _prev[index].ratio = ratio;

          return _prev;
        } else {
          return prev.concat({ id, ratio });
        }
      }
    });
  };

  const getActiveSection = () => {
    const activeSection = state.reduce((active, section) => {
      if (!active.ratio || section.ratio > active.ratio) {
        return section;
      }
      return active;
    }, {});

    return `#${activeSection.id}`;
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(upsertSection);
      },
      {
        rootMargin: "-150px",
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return getActiveSection();
};

export default useSection;
