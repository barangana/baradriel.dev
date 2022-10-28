import { Box, Divider, Heading, SimpleGrid } from '@chakra-ui/react'
import { Cards } from '../'
import projects from '../../utils/projects'
import info from '../../utils/info.json'

export const Projects = () => {
  return (
    <Box mt='12' mb='12' id='projects'>
      <Heading>{info.projects_title}</Heading>
      <SimpleGrid
        columns={[1, 2, 2, 3]}
        spacing={['6', '6', '8', '10', '24']}
        mt='16'
        mb='16'
      >
        {projects.map((project) => (
          <Cards key={project.id} project={project} />
        ))}
      </SimpleGrid>
      <Divider variant='primary' />
    </Box>
  )
}
