import { FunctionComponent } from "react";
import info from "../utils/info";

// Styles
import { Heading, Box, Container, Text, HStack, Image } from "@chakra-ui/react";

const About: FunctionComponent = () => {
  return (
    <Box height="100vh" bg="blue">
      <Heading>About me</Heading>
      <HStack spacing="24px">
        <Box bg="teal.400">
          <Text>{info.about}</Text>
        </Box>
        <Box bg="teal.500">
          <Image
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
            alt="Squirtle"
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default About;
