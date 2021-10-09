import { FunctionComponent } from "react";

// Utils
import personals from "../utils/projects";

// Components
import Project from "../components/Projects/Projects";

// Styles
import { Heading, Box, Container } from "@chakra-ui/react";

export type ProjectsType = {
  id: number;
  title: string;
  description: string;
  status: string;
  tech: string[];
  link: string;
};

const Projects: FunctionComponent = () => {
  return (
    <Box height="100vh">
      <Container position="relative" top="15%">
        <Heading>Projects Section</Heading>
        {personals.map((singleProject) => {
          return <Project key={singleProject.id} project={singleProject} />;
        })}
      </Container>
    </Box>
  );
};

export default Projects;
