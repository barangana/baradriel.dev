import { FC } from "react";

// Utils
import personals from "../utils/projects";

// Components
import Project from "../components/Projects/Projects";

// Styles
import { Heading, Box } from "@chakra-ui/react";

export type ProjectsType = {
  id: number;
  title: string;
  description: string;
  status: string;
  tech: string[];
  link: string;
};

const Projects: FC = () => {
  return (
    <Box id="projects" height="100vh" borderRadius="lg" borderWidth="1px">
      <Box position="absolute">
        <Box position="relative">
          <Heading>Projects Section</Heading>
          <Box>
            {personals.map((singleProject) => {
              return <Project key={singleProject.id} project={singleProject} />;
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
