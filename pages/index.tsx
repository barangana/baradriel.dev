import type { NextPage } from 'next'

import { Cards, Contact, Layout } from '../components'

const Home: NextPage = () => {
  return (
    <Layout>
      Main Content
      <Cards />
      <Contact />
    </Layout>
  )
}

export default Home
