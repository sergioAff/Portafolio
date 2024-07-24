import { version } from "process";

export const links = [
  { id: 1, nombre: "Inicio", enlace: "/", submenus: [] },
  {
    id: 2,
    nombre: "Sobre mi",
    enlace: "/about",
    submenus: [
      { nombreSubmenu: "Quien soy", enlaceSubmenu: "#" },
      { nombreSubmenu: "Qué hago", enlaceSubmenu: "#" },
      { nombreSubmenu: "Tecnologías", enlaceSubmenu: "#" },
    ],
  },
  {
    id: 3,
    nombre: "Experiencia",
    enlace: "/experiencia",
    submenus: [
      { nombreSubmenu: "Todo", enlaceSubmenu: "#" },
      { nombreSubmenu: "Año", enlaceSubmenu: "#" },
      { nombreSubmenu: "Categoría", enlaceSubmenu: "#" },
      { nombreSubmenu: "Tecnología", enlaceSubmenu: "#" },
    ],
  },
  {
    id: 4,
    nombre: "Proyectos",
    enlace: "/proyectos",
    submenus: [],
  },
];

export const linkContact = {
  nombre: "Contáctame",
  enlace: "/contacts",
};
