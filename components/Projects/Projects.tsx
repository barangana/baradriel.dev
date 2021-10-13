import { FC } from "react";
import Link from "next/link";

// Types
import { ProjectsType } from "../../sections/Projects";

// Styles
import { Heading, Box, Text } from "@chakra-ui/react";

type Props = {
  project: ProjectsType;
};

const Projects: FC<Props> = ({ project }) => {
  return (
    <Box id="technology">
      <Box borderWidth="1px" borderRadius="lg" width="500px">
        <Heading>{project.title}</Heading>
        <Box>
          <Text>{project.description}</Text>
          <Text>{project.status}</Text>

          {project.tech.map((singleTech, i) => {
            return (
              <Box key={i}>
                <Text>{singleTech}</Text>
              </Box>
            );
          })}
          <Link href={project.link}>Link to project repository</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
