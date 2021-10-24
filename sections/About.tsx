import { FC } from "react";
import info from "../utils/info";
import Image from "next/image";

// Styles
import { Heading, Box, Text, SimpleGrid } from "@chakra-ui/react";

const About: FC = () => {
  return (
    <Box as="section" id="about" minHeight="100vh">
      <Box position="absolute" left={["8", "8", "96"]}>
        <SimpleGrid columns={[1, 1, 2]}>
          <Box>
            <Heading pb="8" color="brand.600" size="xl">
              About me
            </Heading>
            <Text pb="6" fontSize="lg">
              {info.about}
            </Text>
            <Text pb="6" fontSize="lg">
              {info.about_two}
            </Text>
            <Text pb="6" fontSize="lg">
              {info.about_three}
            </Text>
            <SimpleGrid columns={[2, 3]}>
              {info.about_tech.map((tech, i) => {
                return (
                  <Box key={i} pb="2" color="brand.600" fontWeight="bold">
                    {tech}
                  </Box>
                );
              })}
            </SimpleGrid>
          </Box>
          <Box pl={["8", "44", "8"]} pt="6" pb="6">
            <Image src="/selfie.jpg" alt="selfie" width={300} height={300} />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default About;
