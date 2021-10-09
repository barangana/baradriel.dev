import { FunctionComponent } from "react";
import Link from "next/link";

// Utils
import { SiGithub } from "react-icons/si";
import info from "../utils/info";

// Styles
import { Icon, Box, Center, Text } from "@chakra-ui/react";

const Footer: FunctionComponent = () => {
  return (
    <Box>
      <Center>
        <Text pb={5}>
          {info.copyrights} Designed & built by Adriel Barangan.
        </Text>
      </Center>
    </Box>
  );
};

export default Footer;
