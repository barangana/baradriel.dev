import type { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Button: ComponentSingleStyleConfig = {
  variants: {
    primary: {
      bg: '#1A202C',
      color: 'white',
      fontWeight: 'normal',
      borderRadius: 0,
      borderColor: 'white',
      borderWidth: '1px',

      _hover: {
        bg: 'white',
        color: 'black',
      },
    },
  },
}
