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

//TODO: Fix image when on responsive (currently removed)

const StyledChakraImage = chakra(Image, {
  shouldForwardProp: (prop) => ['layout', 'src', 'alt'].includes(prop),
})

export const About = () => {
  return (
    <Box>
      <SimpleGrid
        columns={[1, 2]}
        gap='10'
        mt='12'
        mb={['12', '24', '24,', '12']}
        gridTemplateColumns='auto 1fr'
      >
        <Box
          position='relative'
          w='325px'
          h='325px'
          display={['none', 'none', 'flex', 'flex']}
        >
          <StyledChakraImage
            src='/me.jpg'
            alt='Image of Adriel'
            layout='fill'
            borderRadius='6'
          />
        </Box>
        <Box h='325px'>
          <Box my={[0, 16, 0, 16]} mx={[0, 0]}>
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
      <Divider variant='white' />
    </Box>
  )
}
