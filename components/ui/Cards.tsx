import {
  Box,
  Button,
  chakra,
  Heading,
  Stack,
  Text,
  Link,
} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import info from '../../utils/info.json'
import { ProjectsProps } from '../../utils/projects'

//TODO: Fix cards when tech stack is included

interface CardProps {
  project: ProjectsProps
}

const StyledChakraImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
})

export const Cards: React.FC<CardProps> = ({ project }) => {
  return (
    <Box h='475px' borderRadius='6' border='1px solid'>
      <Box pt='8' textAlign='center'>
        <StyledChakraImage
          width='300px'
          height='150px'
          src={project.image}
          alt={`${project.title}'s image`}
          objectFit='cover'
        />
      </Box>
      <Box pb='12'>
        <Heading size='md' textAlign='center' pt='8'>
          {project.title}
        </Heading>
        <Text align='center' pt='8'>
          {project.short_description}
        </Text>
      </Box>
      <Stack justify='space-around' direction='row' mx='2'>
        <Link variant='button' href={project.source} isExternal>
          {info.github_title}
        </Link>
        {project.link ? (
          <Link variant='button' href={project.link} isExternal>
            {info.visit}
          </Link>
        ) : null}
      </Stack>
    </Box>
  )
}
