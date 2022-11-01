import { Box, Button, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import info from '../../utils/info.json'
import NextLink from 'next/link'
import { motion } from 'framer-motion'

// TODO: Revise this to take a form and send it to email instead.
const MotionBox = motion(Box)

export const Contact: React.FC = () => {
  return (
    <MotionBox
      id='contact'
      initial='hidden'
      whileInView='visible'
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -10 },
      }}
    >
      <Divider variant='primary' />
      <Flex align='center' direction='column' my={[12, 0, 48]}>
        <Heading size='3xl' pb='8' textAlign='center'>
          {info.contact}
        </Heading>
        <Text textAlign='center' pb='8' w={[64, 96]}>
          {info.contact_text}
        </Text>
        <NextLink href={info.email} passHref>
          <Button as='a' variant='primary'>
            {info.contact_send_mail}
          </Button>
        </NextLink>
      </Flex>
      <Divider variant='primary' />
    </MotionBox>
  )
}
