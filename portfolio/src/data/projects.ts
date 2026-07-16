export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github: string;
  figma: string;
  image: string;
  features: string[];
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: 1,

    slug: "stockmoto",

    title: "StockMoto",

    description:
      "Sistema de gerenciamento de estoque para oficinas e lojas de motopeças.",

    longDescription:
      "O StockMoto é um aplicativo desenvolvido para facilitar o gerenciamento de estoque de oficinas e lojas de motopeças. O sistema permite cadastrar usuários, controlar estoque, gerar orçamentos, emitir alertas de peças com baixo estoque e organizar todo o gerenciamento da oficina de forma simples, moderna e intuitiva.",

    technologies: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Spring Boot",
      "MySQL",
      "Expo",
      "Figma",
    ],

    github: "https://github.com/gabrielgomes2171-web/Stock-Moto-App.git",

    figma:
      "https://www.figma.com/design/8mc9326n5v5aGeKzwOPnt0/APP-STOCK-MOTO",

    image: "/images/logostockmoto.png",

    screenshots: [
      "/images/stockmoto/login.png",
      "/images/stockmoto/home.png",
      "/images/stockmoto/estoque.png",
      "/images/stockmoto/orcamentos.png",
      "/images/stockmoto/perfil.png",
      "/images/stockmoto/configuracoes.png",
    ],

    features: [
      "Login",
      "Cadastro de Usuários",
      "Recuperação de Senha",
      "Controle de Estoque",
      "Cadastro de Peças",
      "Alertas de Estoque",
      "Orçamentos",
      "Perfil",
      "Configurações",
    ],
  },

  {
    id: 2,

    slug: "nexcraft",

    title: "NexCraft",

    description:
      "Sistema para educação financeira e controle de investimentos pessoais.",

    longDescription:
      "O NexCraft é um aplicativo desenvolvido para auxiliar usuários no aprendizado sobre investimentos e na organização financeira. O sistema oferece acompanhamento de patrimônio, metas financeiras, controle de investimentos, gráficos, dashboard e conteúdos educativos.",

    technologies: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Expo",
      "Figma",
    ],

    github: "https://github.com/gabrielgomes2171-web",

    figma:
      "https://www.figma.com/design/9KhBLiVe9cK50canREYEfU/NexCraft-App",

    image: "/images/logonexcraft.png",

    screenshots: [
      "/images/nexcraft/loginnex.png",
      "/images/nexcraft/dashboard.png",
      "/images/nexcraft/investimentos.png",
      "/images/nexcraft/metas.png",
      "/images/nexcraft/perfil.png",
    ],

    features: [
      "Dashboard Financeiro",
      "Controle Financeiro",
      "Metas",
      "Investimentos",
      "Educação Financeira",
      "Gráficos",
      "Perfil",
    ],
  },
];