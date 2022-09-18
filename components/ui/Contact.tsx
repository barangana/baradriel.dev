import { Button, Link, Flex, Heading, Text } from '@chakra-ui/react'
import info from '../../utils/info.json'


// TODO: Revise this to take a form and send it to email instead. 
export const Contact: React.FC = () => {
  return (
    <Flex
      bg='blue.50'
      color='white'
      align='center'
      direction='column'
      mt={12}
      p={[12, 12, 36]}
    >
      <Heading size='lg' pb={8}>
        {info.contact}
      </Heading>
      <Text textAlign='center' pb={8} w={'65%'}>
        {info.contact_text}
      </Text>
      <Button bg='blue.50' color='white' variant='outline'>
        <Link href={info.email}>Say Hello</Link>
      </Button>
    </Flex>
  )
}
