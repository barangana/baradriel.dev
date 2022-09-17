import { Container } from '@chakra-ui/react'
import React from 'react'
import { Header, Footer } from '../'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container maxW='container.xl'>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}
