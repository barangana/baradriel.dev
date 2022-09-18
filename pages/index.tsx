import type { NextPage } from 'next'

import { Contact, Layout } from '../components'

const Home: NextPage = () => {
  return (
    <Layout>
      Main Content
      <Contact />
    </Layout>
  )
}

export default Home
