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
  Box,
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
  window.open(`${info.resume}`)
}

const ItemLink: React.FC<ItemLinkProps> = ({ href, children }) => {
  return (
    <NextLink href={href} passHref>
      <Link p={4}>{children}</Link>
    </NextLink>
  )
}

export const Header: React.FC = () => {
  return (
    <Flex as='nav' justify='space-between' p={2}>
      <Stack
        direction={'row'}
        display={['none', 'none', 'flex', 'flex']}
        align='center'
      >
        <ItemLink href='#projects'>Projects</ItemLink>
        <ItemLink href='#contact'>Contact</ItemLink>
      </Stack>
      <Flex align='center' display={['none', 'none', 'flex', 'flex']}>
        <Button onClick={openResume} variant='primary'>
          Resume
        </Button>
      </Flex>
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
            <MenuItem>Projects</MenuItem>
          </ItemLink>
          <ItemLink href='#contact'>
            <MenuItem>Contact</MenuItem>
          </ItemLink>
        </MenuList>
      </Menu>
    </Flex>
  )
}
