import type { NextPage } from 'next'
import React from 'react'

// Sections

// Styles
import { Box } from '@chakra-ui/react'
import { Layout } from '../components'

const Home: NextPage = () => {
  return (
    <Layout>
      <Box bg='white'>Main Page</Box>
    </Layout>
  )
}

export default Home
