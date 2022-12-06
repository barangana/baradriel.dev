import {
  Box,
  chakra,
  Divider,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import info from '../../utils/info.json'
import { en, fr } from '../../utils/info'
import { useRouter } from 'next/router'

export const About = () => {
  const StyledChakraImage = chakra(Image, {
    shouldForwardProp: (prop) => ['layout', 'src', 'alt'].includes(prop),
  })

  const MotionBox = motion(Box)

  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : fr

  return (
    <Box>
      <SimpleGrid
        columns={[1, 2]}
        gap='10'
        mt='12'
        mb={['48', '36', '24,', '12']}
        gridTemplateColumns='auto 1fr'
      >
        <Box
          position='relative'
          w='325px'
          h='325px'
          display={['none', 'none', 'flex', 'flex']}
        >
          <StyledChakraImage
            src='/images/me.jpg'
            alt='Image of Adriel'
            layout='fill'
            borderRadius='6'
          />
        </Box>
        <MotionBox
          h='325px'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Box my={[0, 16, 0, 4]} mx={[0, 0]}>
            <Heading size='4xl' pb='4'>
              {info.title}
            </Heading>
            <Heading size='lg' pb='6'>
              {t.what}
            </Heading>
            <Text pb='6' w={['250px', '', '350px', '625px', '750px']}>
              {info.who}
            </Text>
            <Text>Some tech I work with on a day to day basis:</Text>
            <Text as='b'>
              HTML, CSS, Javascript, Typescript, React.JS, Next.JS
            </Text>
          </Box>
        </MotionBox>
      </SimpleGrid>
      <Divider variant='primary' />
    </Box>
  )
}
