import {
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiReact,
  SiExpo,
  SiSpringboot,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  SiSwagger,
  SiFigma,
} from "react-icons/si";

import { FaJava } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

export const skills = [
  {
    category: "Linguagens",
    items: [
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "MySQL", icon: SiMysql },
    ],
  },

  {
    category: "Mobile",
    items: [
      { name: "React Native", icon: SiReact },
      { name: "Expo", icon: SiExpo },
    ],
  },

  {
    category: "Back-end",
    items: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Firebase", icon: SiFirebase },
    ],
  },

  {
    category: "Ferramentas",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Swagger", icon: SiSwagger },
      { name: "VS Code", icon: VscVscode },
      { name: "Figma", icon: SiFigma },
    ],
  },
];