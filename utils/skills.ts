import {
  SiTypescript,
  SiJava,
  SiJavascript,
  SiPhp,
  SiCsharp,
  SiSass,
  SiMysql,
  SiGraphql,
  SiReact,
  SiNextDotJs,
  SiJest,
  SiTailwindcss,
  SiGithub,
  SiPostman,
  SiMongodb,
  SiSubversion,
} from "react-icons/si";

import { FaNodeJs } from "react-icons/fa";

const knowledge = [
  {
    id: 1,
    title: "Languages",
    skills: [
      { name: "Java", img: SiJava },
      { name: "JavaScript", img: SiJavascript },
      { name: "TypeScript", img: SiTypescript },
      { name: "PHP", img: SiPhp },
      { name: "C#", img: SiCsharp },
      { name: "CSS/Sass", img: SiSass },
      { name: "MySQL", img: SiMysql },
      { name: "GraphQL", img: SiGraphql },
    ],
  },
  {
    id: 2,
    title: "Frameworks",
    skills: [
      { name: "React.js", img: SiReact },
      { name: "Next.js", img: SiNextDotJs },
      { name: "Jest", img: SiJest },
      { name: "Tailwind CSS", img: SiTailwindcss },
      { name: "Node.js", img: FaNodeJs },
    ],
  },
  {
    id: 3,
    title: "Tools",
    skills: [
      { name: "Git & Github", img: SiGithub },
      { name: "Postman", img: SiPostman },
      { name: "MongoDB", img: SiMongodb },
      { name: "Subversion", img: SiSubversion },
    ],
  },
];

export default knowledge;
