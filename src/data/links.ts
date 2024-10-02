import { useTranslation } from "react-i18next";

interface Links {
  id: number;
  nombre: string;
  enlace: string;
}

export const useLinks = (): Links[] => {
  const { t } = useTranslation("links");
  return [
    { id: 1, nombre: t("1.nombre"), enlace: "/" },
    {
      id: 2,
      nombre: t("2.nombre"),
      enlace: "/about",
    },
    {
      id: 3,
      nombre: t("3.nombre"),
      enlace: "/experiencia",
    },
    {
      id: 4,
      nombre: t("4.nombre"),
      enlace: "/proyectos",
    },
  ];
};

export const useLinkContact = () => {
  const { t } = useTranslation("links");
  return {
    nombre: t("5.nombre"),
    enlace: "/contacts",
  };
};
