import Link from "next/link";
import { FunctionComponent } from "react";

// Utils
import info from "../utils/info";

// Styles
import { Flex, Stack, Button } from "@chakra-ui/react";

const resumeHandler = (e: any): void => {
  e.preventDefault();
  location.href = `${info.resume}`;
};

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
        <Button onClick={resumeHandler}>Resume</Button>
      </Stack>
    </Flex>
  );
};

export default Header;
