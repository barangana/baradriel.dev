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
    <Box id="technologies" height="100vh">
      <Box position="absolute" left={["6", "80"]} pb="10" pt={["56", "16"]}>
        <Box position="relative">
          <Heading pb="16" color="brand.600">
            Some of the technologies I&apos;ve worked with
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} width="100%">
            {knowledges.map((knowledge) => {
              return (
                <Box key={knowledge.id} pr="6">
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
