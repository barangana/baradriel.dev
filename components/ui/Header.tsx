import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Flex,
  Stack,
  Link,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import info from '../../utils/info.json'

interface ItemLinkProps {
  href: string
  children: React.ReactNode
}

//TODO: Fix header so on mobile it takes up whole space instead of a portion.

const openResume = (event: any) => {
  event.preventDefault()
  window.open(`/${info.resume}`)
}

const ItemLink: React.FC<ItemLinkProps> = ({ href, children }) => {
  return (
    <NextLink href={href}>
      <Link p={4} color='white'>
        {children}
      </Link>
    </NextLink>
  )
}

export const Header: React.FC = () => {
  return (
    <Flex bg='blue.50' as='nav' justify={['flex-start', 'flex-start']} p={2}>
      <Stack
        direction={'row'}
        display={['none', 'none', 'flex', 'flex']}
        align='center'
      >
        <ItemLink href='/'>About</ItemLink>
        <ItemLink href='/'>Project</ItemLink>
        <ItemLink href='/'>Skills</ItemLink>
        <ItemLink href='/'>Contact</ItemLink>
        <Button onClick={openResume} variant='outline' color='white'>
          Resume
        </Button>
      </Stack>

      <Menu isLazy>
        <MenuButton
          as={IconButton}
          variant='outline'
          icon={<HamburgerIcon />}
          aria-label='Options'
          display={['flex', 'flex', 'none', 'none']}
        />
        <MenuList bg='black.50'>
          <ItemLink href='/'>
            <MenuItem>About</MenuItem>
          </ItemLink>
          <ItemLink href='/'>
            <MenuItem>Project</MenuItem>
          </ItemLink>
          <ItemLink href='/manga/top-mangas'>
            <MenuItem>Skills</MenuItem>
          </ItemLink>
          <ItemLink href='/search'>
            <MenuItem>Contact</MenuItem>
          </ItemLink>
        </MenuList>
      </Menu>
    </Flex>
  )
}
