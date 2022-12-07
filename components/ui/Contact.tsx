import { Box, Button, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import info from '../../utils/info.json'
import NextLink from 'next/link'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { en, fr } from '../../utils/info'

// TODO: Revise this to take a form and send it to email instead.

export const Contact: React.FC = () => {
  const MotionBox = motion(Box)

  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : fr

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
      <Flex align='center' direction='column' my={[24, 0, 48]}>
        <Heading size='3xl' pb='8' textAlign='center' w={['', '750px']}>
          {t.contact}
        </Heading>
        <Text textAlign='center' pb='8' w={[64, 96]}>
          {t.contact_text}
        </Text>
        <NextLink href={info.email} passHref>
          <Button as='a' variant='primary'>
            {t.contact_send_mail}
          </Button>
        </NextLink>
      </Flex>
      <Divider variant='primary' />
    </MotionBox>
  )
}
