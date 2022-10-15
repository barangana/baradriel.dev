import { SimpleGrid } from '@chakra-ui/react'
import { Cards } from '../'

export const Projects = () => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={['6', '24']} mt='16' mb='16'>
      <Cards description='' techs={['']} github_href='' website_href='' />
      <Cards description='' techs={['']} github_href='' website_href='' />
      <Cards description='' techs={['']} github_href='' website_href='' />
    </SimpleGrid>
  )
}
