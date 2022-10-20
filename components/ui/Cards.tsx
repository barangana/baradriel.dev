import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import info from '../../utils/info.json'
import { ProjectsProps } from '../../utils/projects'

//TODO: Fix cards when tech stack is included

interface CardProps {
  project: ProjectsProps
}

export const Cards: React.FC<CardProps> = ({ project }) => {
  return (
    <Box h='400px' borderRadius='4'>
      <Box pt='8' textAlign='center'>
        <Image width='250' height='150' src='/test.png' alt='test' />
      </Box>
      <Heading size='md' textAlign='center' pt='8'>
        {project.title}
      </Heading>
      <Text align='center' pt='8'>
        {project.short_description}
      </Text>
      <Stack justify='space-around' h='100px' direction='row' mx='2' pt='12'>
        <Link href={project.source}>
          <Button w='64' variant='primary'>
            {info.github_title}
          </Button>
        </Link>
        <Link href={project.link ? project.link : '/'}>
          <Button w='64' variant='primary'>
            {info.visit}
          </Button>
        </Link>
      </Stack>
    </Box>
  )
}
