import { FC } from "react";
import Link from "next/link";

// Types
import { ProjectsType } from "../../sections/Projects";

// Styles
import {
  Heading,
  Box,
  Text,
  Center,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

type Props = {
  project: ProjectsType;
};

const Projects: FC<Props> = ({ project }) => {
  return (
    <Box bg="brand.200">
      <Box width="425px" height="400px" p="6">
        <Center>
          <HStack>
            <Heading pb="4" pt="4" size="md" color="brand.600">
              {project.title}
            </Heading>
            <Link href={project.link}>
              <IconButton
                aria-label="Link to repository"
                icon={<ExternalLinkIcon />}
                variant="ghost"
              ></IconButton>
            </Link>
          </HStack>
        </Center>
        <Box>
          <Box>
            <Box pt="10" pl="4">
              <Text>{project.description}</Text>
            </Box>
            <Box pt="8" pl="4">
              <Text>{project.status}</Text>
            </Box>
            <Box pt="6" pl="4" color="brand.600" fontWeight="bold">
              <Text>{project.tech}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
