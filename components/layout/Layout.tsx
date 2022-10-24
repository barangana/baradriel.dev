import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { Header, Footer } from '../'
import info from '../../utils/info.json'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container maxW='container.xl'>
      <Head>
        <title>{info.website_title}</title>
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/images/favicon.ico'
        />
        <link
          rel='apple-touch-icon'
          sizes='16x16'
          type='image/png'
          href='/images/favicon.ico'
        />
        <link rel='shortcut icon' sizes='16x16' href='/images/favicon.ico' />
        <meta name='msapplication-TileColor' content='#FFFFFF' />
        <meta name='msapplication-TileImage' content='/images/favicon.ico' />
        <meta name='author' content={info.title} />
        <meta name='description' content={info.who_description} />
      </Head>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}
