import { useContext } from "react";
import NavContext from "../context/NavContext";

const useNavigation = () => {
  return useContext(NavContext);
};

export default useNavigation;
