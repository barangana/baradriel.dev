import { FC } from "react";
import info from "../utils/info";
import Image from "next/image";

// Styles
import { Heading, Box, Text, Flex } from "@chakra-ui/react";

const About: FC = () => {
  return (
    <Box height="100vh" id="about">
      <Box position="absolute" left="20%">
        <Box position="relative" top="48" width="100%">
          <Heading pb="8">About me</Heading>
          <Flex>
            <Box pl="8" pr="4" width="50%">
              <Text pb="2">{info.about}</Text>
              <Text pb="2">{info.about_two}</Text>
              <Text pb="2">{info.about_three}</Text>
              <ul>
                {info.about_tech.map((tech) => {
                  return <li key={tech.length + 1}>{tech}</li>;
                })}
              </ul>
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
