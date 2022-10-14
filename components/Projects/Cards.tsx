import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export const Cards = () => {
  return (
    <Box w='300px' bg='red' h='400px'>
      <Box mx='6' pt='4'>
        <Image width='250' height='150' src='/test.png' alt='test' />
      </Box>
      <Text align='center'>Description</Text>
      <Text align='center'>Tech Stack</Text>
      <Stack justify='space-around' h='100px' direction='row' mx='2'>
        <Button w='64'>GitHub</Button>
        <Button w='64'>Visit this site</Button>
      </Stack>
    </Box>
  )
}
