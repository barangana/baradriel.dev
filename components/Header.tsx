import Link from "next/link";
import { FC } from "react";

// Utils
import info from "../utils/info";

// Styles
import { Button, Box, HStack } from "@chakra-ui/react";

const resumeHandler = (e: any): void => {
  e.preventDefault();
  window.open(`${info.resume}`);
};

const Header: FC = () => {
  return (
    <Box pt="6">
      <Box float="left" pl="6">
        Adriel Barangan
      </Box>
      <Box float="right" pr="6">
        <HStack spacing="6">
          <Box _hover={{ color: "brand.600", textDecoration: "underline" }}>
            <Link href="#about">About</Link>
          </Box>
          <Box _hover={{ color: "brand.600", textDecoration: "underline" }}>
            <Link href="#technologies">Technologies</Link>
          </Box>
          <Box _hover={{ color: "brand.600", textDecoration: "underline" }}>
            <Link href="#projects">Projects</Link>
          </Box>
          <Box _hover={{ color: "brand.600", textDecoration: "underline" }}>
            <Link href="#contact">Contact</Link>
          </Box>
          <Button
            onClick={resumeHandler}
            size="md"
            variant="outline"
            color="brand.600"
            border="2px"
          >
            Resume
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
