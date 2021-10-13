import Link from "next/link";
import { FC } from "react";

// Utils
import info from "../utils/info";

// Styles
import { Flex, Stack, Button } from "@chakra-ui/react";

const resumeHandler = (e: any): void => {
  e.preventDefault();
  location.href = `${info.resume}`;
};

const Header: FC = () => {
  return (
    <Flex px={5} py={5} alignItems="center">
      <Flex>
        <p>Adriel Barangan.</p>
      </Flex>
      <Stack direction={{ base: "column", md: "row" }} pl={1370} pr={4}>
        <Link href={"#about"}>About</Link>
        <Link href={"#projects"}>Projects</Link>
        <Link href={"#technologies"}>Technologies</Link>
        <Link href={"#contact"}>Contact</Link>
      </Stack>
      <Button
        size="md"
        variant="outline"
        colorScheme="teal"
        onClick={resumeHandler}
      >
        Resume
      </Button>
    </Flex>
  );
};

export default Header;
