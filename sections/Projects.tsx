import { FC } from 'react';

// Utils
import personals from '../utils/projects';

// Components
import Project from '../components/Projects/Projects';

// Styles
import { Heading, Box, SimpleGrid } from '@chakra-ui/react';

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
    <Box
      id='projects'
      as='section'
      marginBottom='2'
      minHeight='100vh'
      pb='15vh'
    >
      <Box>
        <Heading
          position='relative'
          left={['3', '3', '80']}
          pt='6'
          color='brand.600'
        >
          Some projects I&apos;ve worked on
        </Heading>
        <Heading size='md' position='relative' left={['3', '3', '80']} pt='6'>
          As time goes on I will be adding more
        </Heading>

        <Box top={['10', '20']} left={['0', '0', '80']}>
          <SimpleGrid columns={[1, 2, 3]}>
            {personals.map((singleProject) => {
              return (
                <Box p={['0', '2']} pb={['2', '0']} key={singleProject.id}>
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
