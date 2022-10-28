import type { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Button: ComponentSingleStyleConfig = {
  variants: {
    primary: {
      // color: 'white',
      fontWeight: 'normal',
      borderRadius: 0,
      borderWidth: '1px',
      border: '1px solid',

      _hover: {
        bgColor: 'rgba(216, 212, 212, 0.7)',
      },
    },
  },
}
