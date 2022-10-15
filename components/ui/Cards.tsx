import { Box, Button, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import info from '../../utils/info.json'

interface CardProps {
  description: string
  techs: string[]
  github_href: string
  website_href: string
}

export const Cards: React.FC<CardProps> = () => {
  return (
    <Box bg='papayawhip' h='400px' border='1px solid'>
      <Box pt='8' textAlign='center'>
        <Image width='250' height='150' src='/test.png' alt='test' />
      </Box>
      <Text align='center' pt='8'>
        {info.description_title}
      </Text>
      <Text align='center' pt='8'>
        {info.tech_stack_text}
      </Text>
      <Stack justify='space-around' h='100px' direction='row' mx='2' pt='10'>
        <Button w='64'>{info.github_title}</Button>
        <Button w='64'>{info.visit}</Button>
      </Stack>
    </Box>
  )
}
