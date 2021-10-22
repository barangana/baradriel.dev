import { FC } from "react";
import NavButton from "./NavButton";

// Utils
import info from "../utils/info";

// Styles
import { Button, Box, HStack } from "@chakra-ui/react";

const buttons = [
  { label: "About", link: "about" },
  { label: "Technologies", link: "technologies" },
  { label: "Projects", link: "projects" },
  { label: "Contact", link: "contact" },
];

const resumeHandler = (e: any): void => {
  e.preventDefault();
  window.open(`${info.resume}`);
};

const Header: FC = () => {
  return (
    <Box position="absolute" pt="6" w={["95%", "75%", "100%"]}>
      <Box float="left" pl="1.75em">
        Adriel Barangan
      </Box>
      <Box position="relative" float="right">
        <HStack>
          <NavButton buttons={buttons} />
          <Box pr={["0", "4"]}>
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
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
