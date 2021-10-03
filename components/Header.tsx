import Link from "next/link";
import { FunctionComponent } from "react";

// Styles
import { Flex, Stack, Button } from "@chakra-ui/react";

const Header: FunctionComponent = () => {
  return (
    <Flex px={5} py={5} alignItems="center">
      <Flex>
        <p>Adriel Barangan.</p>
      </Flex>
      <Stack direction={{ base: "column", md: "row" }} pl={1450}>
        <Link href={"/#"}>About</Link>
        <Link href={"/#"}>Projects</Link>
        <Link href={"/#"}>Technologies</Link>
        <Link href={"/#"}>Contact</Link>
      </Stack>
    </Flex>
  );
};

export default Header;
