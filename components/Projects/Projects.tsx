import { FunctionComponent } from "react";
import Link from "next/link";

// Types
import { ProjectsType } from "../../sections/Projects";

// Styles
import { Heading, Box, Text, SimpleGrid, Container } from "@chakra-ui/react";

type Props = {
  project: ProjectsType;
};

const Projects: FunctionComponent<Props> = ({ project }) => {
  return (
    <SimpleGrid columns={3}>
      {project.tech.map((singleTech) => {
        return (
          <Box key={singleTech.length + 1}>
            <Text>{singleTech}</Text>
          </Box>
        );
      })}
    </SimpleGrid>
  );
};

export default Projects;
