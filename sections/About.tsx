import { FC } from "react";
import info from "../utils/info";
import Image from "next/image";

// Styles
import { Heading, Box, Text, Flex, SimpleGrid } from "@chakra-ui/react";

const About: FC = () => {
  return (
    <Box height="100vh" id="about">
      <Box position="absolute" left="20%">
        <Box position="relative" top="48" width="100%">
          <Flex>
            <Box pl="8" pr="4" width="50%">
              <Heading pb="8">About me</Heading>

              <Text pb="2" fontSize="lg">
                {info.about}
              </Text>
              <Text pb="2" fontSize="lg">
                {info.about_two}
              </Text>
              <Text pb="2" fontSize="lg">
                {info.about_three}
              </Text>
              <SimpleGrid columns={3} pl="4">
                {info.about_tech.map((tech, i) => {
                  return <li key={i}>{tech}</li>;
                })}
              </SimpleGrid>
            </Box>
            <Box>
              <Image src="/selfie.jpg" alt="selfie" width={300} height={300} />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
