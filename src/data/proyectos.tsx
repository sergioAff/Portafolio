import { tecnologies } from "@/data/tecnologies";
import { useTranslation } from "react-i18next";

export const Proyectos = () => {
  const { t } = useTranslation("proyectos");

  return [
    {
      id: 1,
      nombre: t("1.title"),
      link: "",
      visitar: "",
      descripcion: t("1.description"),
      image: "/Proyectos/Clinica/1.jpg",
      imagesCarrusel: [
        "/Proyectos/Clinica/1.jpg",
        "/Proyectos/Clinica/2.jpg",
        "/Proyectos/Clinica/3.jpg",
        "/Proyectos/Clinica/4.jpg",
        "/Proyectos/Clinica/5.jpg",
      ],
      tecnologies: [
        tecnologies.html,
        tecnologies.css,
        tecnologies.tailwind,
        tecnologies.js,
        tecnologies.ts,
        tecnologies.react,
        tecnologies.nextjs,
        tecnologies.python,
        tecnologies.django,
        tecnologies.postgres,
        tecnologies.git,
        tecnologies.github,
      ],
      tecnologiesKey: [
        "html",
        "css",
        "tailwind",
        "js",
        "ts",
        "react",
        "nextjs",
        "python",
        "django",
        "postgres",
        "git",
        "github",
      ],
    },
    {
      id: 3,
      nombre: t("3.title"),
      link: "https://github.com/sergioAff/Dashboard",
      visitar: "",
      descripcion: t("3.description"),
      image: "/Proyectos/Dashboard/1.png",
      imagesCarrusel: [
        "/Proyectos/Dashboard/1.png",
        "/Proyectos/Dashboard/2.png",
        "/Proyectos/Dashboard/3.png",
        "/Proyectos/Dashboard/4.png",
        "/Proyectos/Dashboard/5.png",
      ],
      tecnologies: [
        tecnologies.html,
        tecnologies.css,
        tecnologies.tailwind,
        tecnologies.js,
        tecnologies.ts,
        tecnologies.react,
        tecnologies.nextjs,
        tecnologies.postgres,
        tecnologies.git,
        tecnologies.github,
      ],
      tecnologiesKey: [
        "html",
        "css",
        "tailwind",
        "js",
        "ts",
        "react",
        "nextjs",
        "postgres",
        "git",
        "github",
      ],
    },
    {
      id: 2,
      nombre: t("2.title"),
      link: "https://github.com/sergioAff/Gift-Finder",
      visitar: "https://giftfinder.netlify.app/",
      descripcion: t("2.description"),
      image: "/Proyectos/Gif_Finder/1.jpg",
      imagesCarrusel: [
        "/Proyectos/Gif_Finder/1.jpg",
        "/Proyectos/Gif_Finder/3.jpg",
        "/Proyectos/Gif_Finder/4.jpg",
      ],
      tecnologies: [
        tecnologies.html,
        tecnologies.css,
        tecnologies.tailwind,
        tecnologies.js,
        tecnologies.react,
        tecnologies.git,
        tecnologies.github,
      ],
      tecnologiesKey: [
        "html",
        "css",
        "tailwind",
        "js",
        "react",
        "git",
        "github",
      ],
    },

    {
      id: 4,
      nombre: t("4.title"),
      link: "https://github.com/sergioAff/Gesti-n-de-estudiantes",
      visitar: "",
      descripcion: t("4.description"),
      image: "/Proyectos/Matricula/1.jpg",
      imagesCarrusel: [
        "/Proyectos/Matricula/1.jpg",
        "/Proyectos/Matricula/2.jpg",
      ],
      tecnologies: [
        tecnologies.html,
        tecnologies.css,
        tecnologies.js,

        tecnologies.python,
        tecnologies.django,
        tecnologies.postgres,
        tecnologies.git,
        tecnologies.github,
      ],
      tecnologiesKey: [
        "html",
        "css",
        "js",
        "python",
        "django",
        "postgres",
        "git",
        "github",
      ],
    },
    {
      id: 5,
      nombre: t("5.title"),
      link: "https://github.com/sergioAff/yatzhee",
      visitar: "",
      descripcion: t("5.description"),
      image: "/Proyectos/Yatzhee/1.jpg",
      imagesCarrusel: ["/Proyectos/Yatzhee/1.jpg", "/Proyectos/Yatzhee/2.jpg"],
      tecnologies: [tecnologies.python, tecnologies.git, tecnologies.github],
      tecnologiesKey: ["python", "git", "github"],
    },
    {
      id: 7,
      nombre: t("6.title"),
      link: "https://github.com/sergioAff/Recursos_Humanos_v2.0",
      visitar: "",
      descripcion: t("6.description"),
      image: "/Proyectos/RH/1.jpg",
      imagesCarrusel: [
        "/Proyectos/RH/1.jpg",
        "/Proyectos/RH/2.jpg",
        "/Proyectos/RH/3.jpg",
      ],
      tecnologies: [
        tecnologies.python,
        tecnologies.slite,
        tecnologies.git,
        tecnologies.github,
      ],
      tecnologiesKey: ["python", "sqlite", "git", "github"],
    },
    {
      id: 8,
      nombre: t("7.title"),
      link: "https://github.com/sergioAff/Super-Hero-Finder",
      visitar: "",
      descripcion: t("7.description"),
      image: "/Proyectos/SuperHero/1.png",
      imagesCarrusel: [
        "/Proyectos/SuperHero/1.png",
        "/Proyectos/SuperHero/2.png",
      ],
      tecnologies: [tecnologies.swift, tecnologies.git, tecnologies.github],
      tecnologiesKey: ["swift", "git", "github"],
    },
    {
      id: 9,
      nombre: t("8.title"),
      link: "https://github.com/sergioAff/IMC",
      visitar: "",
      descripcion: t("8.description"),
      image: "/Proyectos/IMC/1.png",
      imagesCarrusel: ["/Proyectos/IMC/1.png", "/Proyectos/SuperHero/2.png"],
      tecnologies: [tecnologies.swift, tecnologies.git, tecnologies.github],
      tecnologiesKey: ["swift", "git", "github"],
    },
    {
      id: 6,
      nombre: t("9.title"),
      link: "https://github.com/sergioAff/gym_app",
      visitar: "",
      descripcion: t("9.description"),
      image: "",
      imagesCarrusel: [],
      tecnologies: [tecnologies.fluter, tecnologies.git, tecnologies.github],
      tecnologiesKey: ["flutter", "git", "github"],
    },
    {
      id: 10,
      nombre: t("10.title"),
      link: "https://github.com/sergioAff/monitor-de-recursos",
      visitar: "",
      descripcion: t("10.description"),
      image: "",
      imagesCarrusel: [],
      tecnologies: [tecnologies.python, tecnologies.git, tecnologies.github],
      tecnologiesKey: ["python", "git", "github"],
    },
    {
      id: 11,
      nombre: t("11.title"),
      link: "https://github.com/sergioAff/Random_password",
      visitar: "",
      descripcion: t("11.description"),
      image: "",
      imagesCarrusel: [],
      tecnologies: [tecnologies.python, tecnologies.git, tecnologies.github],
      tecnologiesKey: ["python", "git", "github"],
    },
  ];
};
