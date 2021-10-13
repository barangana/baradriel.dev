import { FC } from "react";
import { IconType } from "react-icons/lib";

// Utils
import knowledges from "../utils/skills";

// Components
import Technology from "../components/Technologies/Technology";

// Styles
import { Heading, Box } from "@chakra-ui/react";

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
      <Box position="absolute">
        <Box position="relative">
          <Heading>Some of the technologies I&apos;ve worked with</Heading>
          <Box>
            {knowledges.map((knowledge) => {
              return <Technology key={knowledge.id} knowledge={knowledge} />;
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Technologies;
