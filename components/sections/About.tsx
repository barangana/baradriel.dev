import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import info from '../../utils/info.json'

export const About = () => {
  return (
    <SimpleGrid columns={2} gridTemplateColumns='auto 1fr' gap='10'>
      <Box w='325px' h='325px' bg='pink' borderRadius={6}>
        Image here
      </Box>
      <Box h='325px' bg='pink'>
        <Box my='16'>
          <Heading>{info.what}</Heading>
          <Text>{info.who}</Text>
          <Text>Put skills here</Text>
        </Box>
      </Box>
    </SimpleGrid>
  )
}
