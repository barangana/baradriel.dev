import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { Button, Divider, Link, Tag } from './components'
import { mode } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode('white', 'black.50')(props),
        color: mode('black.100', 'white'),
      },
    }),
  },
  colors: {
    black: {
      50: '#201C1C',
      100: '#D8D4D4',
      200: '#080404',
    },
    blue: {
      50: '#1A202C',
    },
  },
  components: {
    Button,
    Divider,
    Link,
    Tag,
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },

  config,
})

export default theme
