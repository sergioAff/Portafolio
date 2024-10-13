import { useTranslation } from "react-i18next";

export const Experiencia = () => {
  const { t } = useTranslation(["experiencias"]);
  return [
    {
      trabajo: t("experiencias.7.title"),
      descripcion: t("experiencias.7.description"),
      lugar: t("experiencias.7.place"),
      fechas: {
        inicio: new Date(2020, 5),
        fin: new Date(2023, 2),
      },
    },
    {
      trabajo: t("experiencias.2.title"),
      descripcion: t("experiencias.2.description"),
      lugar: t("experiencias.2.place"),
      fechas: {
        inicio: new Date(2022, 10),
        fin: new Date(2023, 2),
      },
    },
    {
      trabajo: t("experiencias.3.title"),
      descripcion: t("experiencias.3.description"),
      lugar: t("experiencias.3.place"),
      preview: t("experiencias.3.preview"),
      fechas: {
        inicio: new Date(2023, 4),
        fin: new Date(2023, 11),
      },
    },
    {
      trabajo: t("experiencias.1.title"),
      descripcion: t("experiencias.1.description"),
      lugar: t("experiencias.1.place"),
      fechas: {
        inicio: new Date(2023, 8),
        fin: new Date(2024, 1),
      },
    },

    {
      trabajo: t("experiencias.4.title"),
      descripcion: t("experiencias.4.description"),
      lugar: t("experiencias.4.place"),
      fechas: {
        inicio: new Date(2024, 1),
        fin: new Date(2024, 3),
      },
    },
    {
      trabajo: t("experiencias.6.title"),
      descripcion: t("experiencias.6.description"),
      lugar: t("experiencias.6.place"),
      fechas: {
        inicio: new Date(2024, 1),
        fin: new Date(2024, 4),
      },
    },
    {
      trabajo: t("experiencias.5.title"),
      descripcion: t("experiencias.5.description"),
      lugar: t("experiencias.5.place"),
      fechas: {
        inicio: new Date(2024, 5),
        fin: new Date(),
      },
    },
  ];
};
