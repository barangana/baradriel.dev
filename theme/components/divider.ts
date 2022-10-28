import { ComponentStyleConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const Divider: ComponentStyleConfig = {
  baseStyle: {
    borderColor: mode('black.100', 'white'),
    borderWidth: '2px',
    borderStyle: 'solid',
  },
}
