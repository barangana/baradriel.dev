import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { Button, Divider } from './components'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({
  colors: {
    brand: {
      100: '#0D1B2A',
      200: '#1B263B',
      300: '#415A77',
      400: '#778DA9',
      500: '#E0E1DD',
      600: '#9AA5C4',
    },
    blue: {
      50: '#1A202C',
    },
  },
  components: {
    Button,
    Divider,
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },

  config,
})

export default theme
