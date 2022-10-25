export interface ProjectsProps {
  id: number
  title: string
  description: string
  short_description: string
  link?: string
  source: string
  image: string
}

const projects = [
  {
    id: 1,
    title: 'Drift List',
    description:
      'A website to display top, popular and upcoming anime as well as mangas with the use of a public API. Allow users to search for a specific show or manga and provides extensive details.',
    short_description:
      'A website to display top, popular, upcoming anime and mangas.',
    link: 'https://drift-list.vercel.app/',
    source: 'https://github.com/barangana/drift-list',
    image: '/images/drift-list.png',
  },
  {
    id: 2,
    title: 'Calodesign',
    description:
      'A freelance project for an interior design company called Calodesign. Implemented responsive pages and components. Data and images are stored on a content management system to allow accessed users to add new projects, designs or blogs.',
    short_description:
      'A freelance project for an interior design company called Calodesign. In development.',
    source: 'https://github.com/barangana/calodesign',
    image: '/images/calo.png',
  },
]

export default projects
