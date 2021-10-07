import { FunctionComponent } from "react";
import Link from "next/link";

import info from "../utils/info";

// Styles
import { Heading, Box, Container, Button, Text } from "@chakra-ui/react";

const About: FunctionComponent = () => {
  return (
    <Box height="100vh" bg="red">
      <Container maxWidth="2xl" position="relative" top="20%" right="10%">
        <Heading size="md" pb="1em" fontSize="2xl">
          Hi, my name is
        </Heading>
        <Heading fontSize="6xl">{info.title}</Heading>
        <Heading pb="1em">{info.header}</Heading>
        <Text pb="2em">{info.who}</Text>
        <Button size="md" variant="outline" colorScheme="teal">
          <Link href={info.github}>GitHub</Link>
        </Button>
      </Container>
    </Box>
  );
};

export default About;
