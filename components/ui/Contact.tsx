import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import info from '../../utils/info.json'
import NextLink from 'next/link'

// TODO: Revise this to take a form and send it to email instead.
export const Contact: React.FC = () => {
  return (
    <Flex
      bg='blue.50'
      color='white'
      align='center'
      direction='column'
      mt={12}
      p={[6, 0, 36]}
    >
      <Heading size='lg' pt='8' pb='8' textAlign='center'>
        {info.contact}
      </Heading>
      <Text textAlign='center' pb='8' w={[64, 96]}>
        {info.contact_text}
      </Text>
      <NextLink href={info.email} passHref>
        <Button as='a' bg='blue.50' color='white' variant='outline'>
          {info.contact_send_mail}
        </Button>
      </NextLink>
    </Flex>
  )
}
