import { FunctionComponent } from "react";

// Types
import { ProjectsType } from "../../sections/Projects";

// Styles
import { Heading, Box } from "@chakra-ui/react";

type Props = {
  project: ProjectsType;
};

const Projects: FunctionComponent<Props> = ({ project }) => {
  return (
    <Box>
      <Heading>{project.title}</Heading>
      <p>Description: {project.description}</p>
      <p>Status: {project.status}</p>
      {project.tech.map((singleTech) => {
        return <p>{singleTech}</p>;
      })}
    </Box>
  );
};

export default Projects;
