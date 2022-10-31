import { Button, IconButton, useColorMode } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'
import React from 'react'

export const ToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label='toggle'
      isRound
      onClick={toggleColorMode}
      icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
      size='lg'
      position='fixed'
      bottom={['2', '4', '4', '16']}
      right={['2', '4', '4', '16']}
    />
  )
}
