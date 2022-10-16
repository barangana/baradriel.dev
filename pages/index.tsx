import type { NextPage } from 'next'

import { Cards, Contact, Layout, Projects } from '../components'

const Home: NextPage = () => {
  return (
    <Layout>
      <Projects />
      <Contact />
    </Layout>
  )
}

export default Home
