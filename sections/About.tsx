import { FunctionComponent } from "react";
import info from "../utils/info";

// Styles
import { Heading, Box, Container } from "@chakra-ui/react";

const About: FunctionComponent = () => {
  return (
    <Box height="100vh">
      <Container>
        <Heading>About me</Heading>
        <p>{info.about}</p>
      </Container>
    </Box>
  );
};

export default About;
