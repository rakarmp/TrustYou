import { chakra } from "@chakra-ui/react";
import NextLink from "next/link";
import AnimationHandle from "../loading/animation";

const Logo = () => {
  return (
    <NextLink href="/" passHref>
      <chakra.a fontSize="2rem" fontWeight="700">
        <AnimationHandle />
      </chakra.a>
    </NextLink>
  );
};

export default Logo;
