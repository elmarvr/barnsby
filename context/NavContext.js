import { useRef, useEffect, createContext, useState } from "react";
import { useClickAway } from "react-use";
import { useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import getHash from "../utils/getHash";

import useSection from "../hooks/useSection";

const NavContext = createContext({});

export const NavProvider = (props) => {
  const ref = useRef(null);
  const activeSection = useSection();

  const { onToggle, onClose, isOpen } = useDisclosure();

  const collapse = useBreakpointValue({ base: true, lg: false });

  const initialize = (node) => {
    ref.current = node;
  };

  const isActive = (path) => getHash(path) === activeSection;

  useEffect(() => {
    if (!collapse) {
      onClose();
    }
  }, [collapse]);

  useClickAway(ref, () => {
    onClose();
  });

  const context = {
    toggle: onToggle,
    isOpen,
    collapse,
    isActive,
    initialize,
    close: onClose,
  };

  return <NavContext.Provider value={context} {...props} />;
};

export default NavContext;
