import { Box, Button, Stack, Text } from '@chakra-ui/react'
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
      <Text align='center' pt='8'>
        {project.short_description}
      </Text>
      {/* <Text align='center' pt='8'>
        {info.tech_stack_text}
      </Text> */}
      <Stack justify='space-around' h='100px' direction='row' mx='2' pt='20'>
        <Link href={project.source}>
          <Button w='64'>{info.github_title}</Button>
        </Link>
        <Link href={project.link ? project.link : '/'}>
          <Button w='64'>{info.visit}</Button>
        </Link>
      </Stack>
    </Box>
  )
}
