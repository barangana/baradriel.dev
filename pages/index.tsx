import type { NextPage } from 'next'

import { About, Contact, Layout, Projects } from '../components'

const Home: NextPage = () => {
  return (
    <Layout>
      <About />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default Home
