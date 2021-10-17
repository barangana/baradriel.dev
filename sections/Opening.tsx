import { FC } from "react";
import Link from "next/link";

import info from "../utils/info";

// Styles
import { Heading, Box, Button, Text } from "@chakra-ui/react";

const About: FC = () => {
  return (
    <Box height="100vh">
      <Box position="absolute" w={["75%", "80%", "100%"]}>
        <Box position="relative" top="64" left={["20", "44", "80"]}>
          <Text pb="6" fontSize="xl" fontWeight="bold" color="brand.600">
            Welcome, my name is
          </Text>
          <Heading fontSize={["3xl", "4xl", "6xl"]}>
            <Link href={info.linkedin}>{info.title}</Link>
          </Heading>
          <Heading color="brand.600" pb="6">
            {info.what}
          </Heading>
          <Text width="80%" fontSize="lg">
            {info.who}
          </Text>
          <Box pt="6">
            <Button
              size="lg"
              variant="outline"
              color="brand.600"
              border="2px"
              bgColor="brand.200"
            >
              <Link href={info.github}>Github</Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
