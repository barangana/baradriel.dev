import type { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Link: ComponentSingleStyleConfig = {
  variants: {
    button: {
      fontWeight: 'normal',
      borderRadius: 0,
      borderWidth: '1px',
      textAlign: 'center',
      py: '4',
      w: '300px',
      border: '1px solid',

      _hover: {
        bg: 'rgba(216, 212, 212, 0.7)',
        textDecor: 'none',
      },
    },
  },
}
