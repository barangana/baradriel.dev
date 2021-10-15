import { FC } from "react";
import { IconType } from "react-icons/lib";

// Utils
import knowledges from "../utils/skills";

// Components
import Technology from "../components/Technologies/Technology";

// Styles
import { Heading, Box, SimpleGrid } from "@chakra-ui/react";

export type KnowledgeType = {
  id: number;
  title: string;
  skills: Array<{
    name: string;
    img: IconType;
  }>;
};

const Technologies: FC = () => {
  return (
    <Box height="100vh" id="technologies">
      <Box position="absolute" pt="16">
        <Box position="relative" left="80">
          <Heading pb="16" color="brand.600">
            Some of the technologies I&apos;ve worked with
          </Heading>
          <SimpleGrid columns={3}>
            {knowledges.map((knowledge) => {
              return (
                <Box key={knowledge.id}>
                  <Technology knowledge={knowledge} />
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default Technologies;
