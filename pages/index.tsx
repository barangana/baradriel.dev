import type { NextPage } from 'next'

import { About, Contact, Layout, Projects, ToggleButton } from '../components'

const Home: NextPage = () => {
  return (
    <Layout>
      <About />
      <Projects />
      <Contact />
      <ToggleButton />
    </Layout>
  )
}

export default Home
