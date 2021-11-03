import { FC } from "react";
import NavButton from "./NavButton";

// Utils
import info from "../utils/info";

// Styles
import { Button, HStack, Flex, Text } from "@chakra-ui/react";

const buttons = [
  { label: "About", link: "#about" },
  { label: "Technologies", link: "#technologies" },
  { label: "Projects", link: "#projects" },
  { label: "Contact", link: "#contact" },
];

const resumeHandler = (e: any): void => {
  e.preventDefault();
  window.open(`${info.resume}`);
};

const Header: FC = () => {
  return (
    <Flex justify="space-between" p="5" direction={["column", "row"]}>
      <Text>Adriel Barangan</Text>
      <HStack>
        <NavButton buttons={buttons} />
        <Button
          onClick={resumeHandler}
          size="md"
          variant="outline"
          color="brand.600"
          bgColor="brand.200"
          border="2px"
        >
          Resume
        </Button>
      </HStack>
    </Flex>
  );
};

export default Header;
