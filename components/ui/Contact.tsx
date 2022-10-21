import { Box, Button, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import info from '../../utils/info.json'
import NextLink from 'next/link'

// TODO: Revise this to take a form and send it to email instead.
export const Contact: React.FC = () => {
  return (
    <Box id='contact'>
      <Flex
        bg='blue.50'
        color='white'
        align='center'
        direction='column'
        mt={12}
        p={[6, 0, 36]}
      >
        <Heading size='3xl' pt='8' pb='8' textAlign='center'>
          {info.contact}
        </Heading>
        <Text textAlign='center' pb='8' w={[64, 96]}>
          {info.contact_text}
        </Text>
        <NextLink href={info.email} passHref>
          <Button as='a' bg='blue.50' color='white' variant='primary'>
            {info.contact_send_mail}
          </Button>
        </NextLink>
      </Flex>
      <Divider variant='white' />
    </Box>
  )
}
