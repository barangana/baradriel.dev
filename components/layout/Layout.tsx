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
          rel='apple-touch-icon'
          sizes='72x72'
          href='/images/icons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/images/icons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/images/icons/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff'></meta>
        <meta name='author' content={info.title} />
        <meta name='description' content={info.who_description} />
      </Head>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}
