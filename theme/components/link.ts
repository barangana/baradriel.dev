import type { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Link: ComponentSingleStyleConfig = {
  variants: {
    button: {
      bg: '#1A202C',
      color: 'white',
      fontWeight: 'normal',
      borderRadius: 0,
      borderColor: 'white',
      borderWidth: '1px',
      textAlign: 'center',
      py: '4',
      w: '300px',
      border: '1px solid',

      _hover: {
        bg: 'white',
        color: 'black',
        textDecor: 'none',
      },
    },
  },
}
