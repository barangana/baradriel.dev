import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Flex,
  Stack,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Box,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import NextLink from 'next/link'
import info from '../../utils/info.json'
import { en, fr } from '../../utils/info'
import { useRouter } from 'next/router'

interface ItemLinkProps {
  href: string
  children: React.ReactNode
}

//TODO: Fix header so on mobile it takes up whole space instead of a portion.

const openResume = (event: any) => {
  event.preventDefault()
  window.open(`${info.resume}`)
}

const ItemLink: React.FC<ItemLinkProps> = ({ href, children }) => {
  return (
    <NextLink href={href} passHref>
      <Text
        p={4}
        as='b'
        cursor='pointer'
        _hover={{ textDecoration: 'underline' }}
      >
        {children}
      </Text>
    </NextLink>
  )
}

export const Header: React.FC = () => {
  const MotionStack = motion(Stack)
  const MotionFlex = motion(Flex)

  const { locale = 'en', push, pathname, query, asPath } = useRouter()

  const toggleLanguage = () => {
    push({ pathname, query }, asPath, { locale: locale === 'en' ? 'fr' : 'en' })
  }
  const t = locale === 'en' ? en : fr

  return (
    <Flex as='nav' justify='space-between' p={2}>
      <MotionStack
        direction={'row'}
        display={['none', 'none', 'flex', 'flex']}
        align='center'
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <ItemLink href='#projects'>{t.projects}</ItemLink>
        <ItemLink href='#contact'>Contact</ItemLink>
      </MotionStack>
      <MotionFlex
        align='center'
        display={['none', 'none', 'flex', 'flex']}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <Box pr='2'>
          <Button variant='primary' onClick={toggleLanguage}>
            {locale === 'en' ? 'FR' : 'EN'}
          </Button>
        </Box>
        <Button onClick={openResume} variant='primary'>
          Resume
        </Button>
      </MotionFlex>
      <Menu isLazy>
        <MenuButton
          as={IconButton}
          variant='outline'
          icon={<HamburgerIcon />}
          aria-label='Options'
          display={['flex', 'flex', 'none', 'none']}
        />
        <MenuList bg='black.50'>
          <ItemLink href='#projects'>
            <MenuItem>{t.contact}</MenuItem>
          </ItemLink>
          <ItemLink href='#contact'>
            <MenuItem>Contact</MenuItem>
          </ItemLink>
        </MenuList>
      </Menu>
    </Flex>
  )
}
