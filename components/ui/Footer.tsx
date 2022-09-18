import info from '../../utils/info'
import { Flex, IconButton, Link, Stack, Text } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

type LinkTypes = {
  name: string
  href: string
  icon?: JSX.Element
}

const Links: LinkTypes[] = [
  { name: 'GitHub', href: info.github, icon: <FaGithub /> },
  { name: 'LinkedIn', href: info.linkedin, icon: <FaLinkedin /> },
  { name: 'Email', href: info.email, icon: <EmailIcon /> },
]

export const Footer: React.FC = () => {
  return (
    <Flex bg='blue.50' color='white' pt={12} pb={12} justify='center'>
      <Stack>
        <Text align='center'>{info.copyrights}</Text>
        <Stack direction='row' justify='center'>
          {Links.map((link) => (
            <Link key={link.name} href={link.href}>
              <IconButton aria-label='Options' icon={link.icon} bg='blue.50' />
            </Link>
          ))}
        </Stack>
      </Stack>
    </Flex>
  )
}
