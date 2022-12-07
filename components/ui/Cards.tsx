import { Box, chakra, Heading, Stack, Text, Link, Tag } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import info from '../../utils/info.json'
import { ProjectsProps } from '../../utils/projects'

interface CardProps {
  project: ProjectsProps
}

export const Cards: React.FC<CardProps> = ({ project }) => {
  const StyledChakraImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['width', 'height', 'src', 'alt'].includes(prop),
  })

  const router = useRouter()
  const { locale } = router
  const t =
    locale === 'en'
      ? project.short_description.en
      : project.short_description.fr

  return (
    <Box h='500px' borderRadius='6' border='1px solid'>
      <Box pt='8' textAlign='center'>
        <StyledChakraImage
          width='300px'
          height='150px'
          src={project.image}
          alt={`${project.title}'s image`}
          objectFit='cover'
        />
      </Box>
      <Box pb='6'>
        <Heading size='md' textAlign='center' pt='8'>
          {project.title}
        </Heading>
        <Text align='center' pt='8'>
          {t}
        </Text>
      </Box>
      <Stack justify='space-evenly' direction='row' pb='6'>
        {project.stack.map((tech, i) => (
          <Tag key={i}>{tech}</Tag>
        ))}
      </Stack>
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
