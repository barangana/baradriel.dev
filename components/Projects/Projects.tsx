import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import { Cards } from '../'
import projects from '../../utils/projects'
import info from '../../utils/info.json'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export const Projects = () => {
  return (
    <MotionBox
      mt='12'
      id='contact'
      initial='hidden'
      whileInView='visible'
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -10 },
      }}
    >
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
    </MotionBox>
  )
}
