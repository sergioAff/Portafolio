import { ReactNode } from "react";

export interface Contacto {
  via: string;
  direccion: string;
  enlace: string;
  target: string;
  icon: ReactNode;
}

export const contactos: Contacto[] = [
  {
    via: "Email: ",
    direccion: "mailto:sergioadrianfernandez02@gmail.com",
    enlace: "sergioadrianfernandez02@gmail.com",
    target: "_blank",
    icon: "/Contactos/mail.png",
  },
  {
    via: "Whatsapp: ",
    direccion: "https://wa.me/5355528734",
    enlace: "+5355528734",
    target: "_blank",
    icon: "/Contactos/whatsapp.png",
  },
  {
    via: "Linkedin: ",
    direccion: "https://linkedin.com/in/sergio-adrian-fernández",
    enlace: "Sergio Adrian Fernández",
    target: "_blank",
    icon: "/Contactos/linkedin.png",
  },
  {
    via: "Github: ",
    direccion: "https://github.com/sergioAff",
    enlace: "sergioAff",
    target: "_blank",
    icon: "/Contactos/github.png",
  },
  {
    via: "Instagram: ",
    direccion: "https://www.instagram.com/sergio_aff",
    enlace: "@sergio_aff",
    target: "_blank",
    icon: "/Contactos/instagram.png",
  },
];
