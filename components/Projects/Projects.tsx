import { SimpleGrid } from '@chakra-ui/react'
import { Cards } from '../'
import projects from '../../utils/projects'

export const Projects = () => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={['6', '24']} mt='16' mb='16'>
      {projects.map((project) => (
        <Cards key={project.id} project={project} />
      ))}
    </SimpleGrid>
  )
}
