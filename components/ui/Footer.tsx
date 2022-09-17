import { FC } from 'react'

// Utils
import info from '../../utils/info'

// Styles
import { Box, Text } from '@chakra-ui/react'

export const Footer: FC = () => {
  return (
    <Box w='100%'>
      <Box>
        <Text textAlign='center' pb='6'>
          {info.copyrights} Designed & built by Adriel Barangan.
        </Text>
      </Box>
    </Box>
  )
}
