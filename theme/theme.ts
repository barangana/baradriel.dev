import { extendTheme, ThemeConfig } from '@chakra-ui/react'

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
      50: '#0a192f',
    },
  },
})

export default theme
