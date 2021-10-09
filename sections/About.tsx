import { FunctionComponent } from "react";
import info from "../utils/info";

// Styles
import {
  Heading,
  Box,
  Text,
  Image,
  SimpleGrid,
  ListItem,
} from "@chakra-ui/react";

const About: FunctionComponent = () => {
  return (
    <Box height="100vh" id="about">
      <SimpleGrid columns={2} position="relative" top="10%" padding="5em">
        <Box bg="teal.400" p="5em">
          <Heading p={5}>About me</Heading>
          <Box position="relative" top="5%">
            <Text p={5}>{info.about}</Text>
            <Text p={5}>{info.about_two}</Text>
            <Text p={5}>{info.about_three}</Text>
            {info.about_tech.map((tech) => {
              return <li key={tech.length + 1}>{tech}</li>;
            })}
          </Box>
        </Box>
        <Box bg="teal.500" p="5em">
          <Image></Image>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default About;
