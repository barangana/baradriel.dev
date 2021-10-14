import { FC } from "react";

// Utils
import personals from "../utils/projects";

// Components
import Project from "../components/Projects/Projects";

// Styles
import { Heading, Box, SimpleGrid } from "@chakra-ui/react";

export type ProjectsType = {
  id: number;
  title: string;
  description: string;
  status: string;
  tech: string;
  link: string;
};

const Projects: FC = () => {
  return (
    <Box id="projects" height="100vh">
      <Box position="absolute">
        <Heading>Some projects I&apos;ve worked on</Heading>

        <Box position="relative" top="20" left="64">
          <SimpleGrid columns={3}>
            {personals.map((singleProject) => {
              return <Project key={singleProject.id} project={singleProject} />;
            })}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
