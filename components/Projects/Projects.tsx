import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import { Cards } from '../'
import projects from '../../utils/projects'
import { motion } from 'framer-motion'
import { en, fr } from '../../utils/info'
import { useRouter } from 'next/router'

export const Projects = () => {
  const MotionBox = motion(Box)
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : fr

  return (
    <MotionBox
      mt={['14', '', '14', '16']}
      id='projects'
      initial='hidden'
      whileInView='visible'
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -10 },
      }}
    >
      <Heading>{t.projects_title}</Heading>
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
