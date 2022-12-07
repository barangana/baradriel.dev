import { Flex, IconButton, Stack, Text, Link } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import info from '../../utils/info.json'
import { useRouter } from 'next/router'
import { en, fr } from '../../utils/info'

type LinkTypes = {
  name: string
  href: string
  icon?: JSX.Element
}

const Links: LinkTypes[] = [
  { name: 'GitHub', href: info.github_url, icon: <FaGithub /> },
  { name: 'LinkedIn', href: info.linkedin, icon: <FaLinkedin /> },
  { name: 'Email', href: info.email, icon: <EmailIcon /> },
]

export const Footer: React.FC = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : fr

  return (
    <Flex pt={12} pb={12} justify='center'>
      <Stack>
        <Text align='center'>{`© ${new Date().getFullYear()} ${
          t.copyrights
        } `}</Text>
        <Stack direction='row' justify='center'>
          {Links.map((link) => (
            <Link key={link.name} href={link.href} isExternal>
              <IconButton aria-label='Options' icon={link.icon} />
            </Link>
          ))}
        </Stack>
      </Stack>
    </Flex>
  )
}
