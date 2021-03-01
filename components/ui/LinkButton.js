import { forwardRef } from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import withAnimation from "../hoc/withAnimation";
import scrollToSection from "../../utils/scrollToSection";
import useNavigation from "../../hooks/useNavigation";

const LinkButton = forwardRef(({ to, children, active, ...props }, ref) => {
  const { close } = useNavigation();
  return (
    <Link href={to || ""} shallow={true}>
      <Button
        onClick={(e) => {
          e.preventDefault();
          scrollToSection(to);
          close();
        }}
        ref={ref}
        as={props.as || "a"}
        active={active ? "true" : undefined}
        {...props}
      >
        {children}
      </Button>
    </Link>
  );
});

export default withAnimation(LinkButton);
