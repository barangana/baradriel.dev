import { FC } from "react";

// Utils
import info from "../utils/info";

// Styles
import { Box, Center, Text } from "@chakra-ui/react";

const Footer: FC = () => {
  return (
    <Box>
      <Center>
        <Text pb="6">
          {info.copyrights} Designed & built by Adriel Barangan.
        </Text>
      </Center>
    </Box>
  );
};

export default Footer;
