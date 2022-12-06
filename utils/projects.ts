export interface ProjectsProps {
  id: number
  title: string
  description: string
  short_description: string
  link?: string
  source: string
  image: string
  stack: string[]
}

const projects = [
  {
    id: 1,
    title: 'Calodesign',
    description:
      'A freelance project for an interior design company called Calodesign. Implemented responsive pages and components. Data and images are stored on a content management system to allow accessed users to add new projects, designs or blogs.',
    short_description:
      'A freelance project for an interior design company called Calodesign. In development.',
    link: 'https://calodesign.vercel.app/',
    source: 'https://github.com/barangana/calodesign',
    image: '/images/calo.png',
    stack: ['NextJS', 'ChakraUI', 'Sanity'],
  },
  {
    id: 2,
    title: 'Drift List',
    description:
      'A website to display top, popular and upcoming anime as well as mangas with the use of a public API. Allow users to search for a specific show or manga and provides extensive details.',
    short_description:
      'A website to display top, popular, upcoming anime and mangas.',
    link: 'https://drift-list.vercel.app/',
    source: 'https://github.com/barangana/drift-list',
    image: '/images/drift-list.png',
    stack: ['NextJS', 'ChakraUI', 'JikanAPI'],
  },
  {
    id: 3,
    title: 'Bookmarker',
    description:
      'A project meant to track the books you are reading or read before. The main purpose is to keep track of the last page you last read and for keeping notes.',
    short_description:
      'A project meant to track the books you are currently reading or read before. In development.',
    source: 'https://github.com/barangana/bookmarker',
    image: '/images/no-image.jpg',
    stack: ['NextJS', 'Prisma', 'Postgres', 'TailwindCSS'],
  },
]

export default projects
