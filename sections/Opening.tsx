import { FunctionComponent } from "react";
import info from "../utils/info";

// Styles
import { Heading } from "@chakra-ui/react";

const About: FunctionComponent = () => {
  return (
    <section>
      <Heading size="md">Hi my name is</Heading>
      <Heading>{info.title}</Heading>
      <Heading>{info.header}</Heading>
      <p>{info.who}</p>
    </section>
  );
};

export default About;
