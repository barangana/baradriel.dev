import {
  Box,
  chakra,
  Divider,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import info from '../../utils/info.json'

const StyledChakraImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
})

export const About = () => {
  return (
    <Box>
      <SimpleGrid
        columns={2}
        gridTemplateColumns='auto 1fr'
        gap='10'
        mt='12'
        mb='12'
      >
        <StyledChakraImage
          src='/me.jpg'
          alt='Image of Adriel'
          width='325'
          height='325'
          borderRadius='6'
        />
        <Box h='325px'>
          <Box my='16' mx='12'>
            <Heading size='4xl' pb='4'>
              {info.title}
            </Heading>
            <Heading size='lg' pb='6'>
              {info.what}
            </Heading>
            <Text pb='6'>{info.who}</Text>
            <Text as='b'>
              HTML, CSS, Javascript, Typescript, React.JS, Next.JS
            </Text>
          </Box>
        </Box>
      </SimpleGrid>
      <Divider />
    </Box>
  )
}
