import { Box, Button, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import info from '../../utils/info.json'
import NextLink from 'next/link'

// TODO: Revise this to take a form and send it to email instead.
export const Contact: React.FC = () => {
  return (
    <Box id='contact'>
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
    </Box>
  )
}
