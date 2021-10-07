import { FunctionComponent } from "react";
import { IconType } from "react-icons/lib";

// Utils
import knowledges from "../utils/skills";

// Components
import Technology from "../components/Technologies/Technology";

// Styles
import { Heading, Box, Container } from "@chakra-ui/react";

export type KnowledgeType = {
  id: number;
  title: string;
  skills: {
    name: string;
    img: IconType;
  }[];
};

const Technologies: FunctionComponent = () => {
  return (
    <Box height="100vh" bg="green">
      <Container maxW="3xl">
        <Heading>Some of the technologies I&apos;ve worked with.</Heading>
        {knowledges.map((knowledge) => {
          return <Technology key={knowledge.id} knowledge={knowledge} />;
        })}
      </Container>
    </Box>
  );
};

export default Technologies;
