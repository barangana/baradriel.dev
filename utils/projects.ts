export interface ProjectsProps {
  id: number
  title: string
  description: {
    en: string
    fr: string
  }
  short_description: {
    en: string
    fr: string
  }
  link?: string
  source: string
  image: string
  stack: string[]
}

//TODO: Add long description once we implement seperate pages for projects

const projects = [
  {
    id: 1,
    title: 'Calodesign',
    description: {
      en: 'A freelance project for an interior design company called Calodesign. Implemented responsive pages and components. Data and images are stored on a content management system to allow accessed users to add new projects, designs or blogs.',
      fr: '',
    },
    short_description: {
      en: 'A freelance project for an interior design company called Calodesign. In development.',
      fr: 'Un projet freelance pour une compagnie nommée Calodesign. En développment.',
    },
    link: 'https://calodesign.vercel.app/',
    source: 'https://github.com/barangana/calodesign',
    image: '/images/calo.png',
    stack: ['NextJS', 'ChakraUI', 'Sanity'],
  },
  {
    id: 2,
    title: 'Drift List',
    description: {
      en: 'A website to display top, popular and upcoming anime as well as mangas with the use of a public API. Allow users to search for a specific show or manga and provides extensive details.',
      fr: '',
    },
    short_description: {
      en: 'A website to display top, popular, upcoming anime and mangas.',
      fr: 'Un site web pour afficher les meilleurs, populaires ou à venir animes et mangas.',
    },
    link: 'https://drift-list.vercel.app/',
    source: 'https://github.com/barangana/drift-list',
    image: '/images/drift-list.png',
    stack: ['NextJS', 'ChakraUI', 'JikanAPI'],
  },
  {
    id: 3,
    title: 'Bookmarker',
    description: {
      en: 'A project meant to track the books you are reading or read before. The main purpose is to keep track of the last page you last read and for keeping notes.',
      fr: '',
    },
    short_description: {
      en: 'A project meant to track the books you are currently reading or read before. In development.',
      fr: 'Un projet pour suivre les livres que vous lisez ou vous avez lus. En développement.',
    },
    source: 'https://github.com/barangana/bookmarker',
    image: '/images/no-image.jpg',
    stack: ['NextJS', 'Prisma', 'Postgres', 'TailwindCSS'],
  },
]

export default projects
