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

const Projects: FC<ProjectsType> = () => {
  return (
    <Box id="projects" height="120vh">
      <Box position="absolute">
        <Heading position="relative" left="80" pt="6" color="brand.600">
          Some projects I&apos;ve worked on
        </Heading>
        <Heading size="md" position="relative" left="80" pt="6">
          As time goes on I will be adding more
        </Heading>

        <Box position="relative" top="20" left="80">
          <SimpleGrid columns={3}>
            {personals.map((singleProject) => {
              return (
                <Box p="2" key={singleProject.id}>
                  <Project project={singleProject} />
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
