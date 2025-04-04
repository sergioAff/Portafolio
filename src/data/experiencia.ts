import { useTranslation } from "react-i18next";

export const Experiencia = () => {
  const { t } = useTranslation(["experiencias"]);
  return [
    {
      trabajo: t("experiencias.8.title"),
      descripcion: t("experiencias.8.description"),
      lugar: t("experiencias.8.place"),
      company: t("experiencias.8.company"),
      companyLink: t("experiencias.8.companyLink"),
      fechas: {
        inicio: new Date(2024, 11),
        fin: new Date(new Date().getFullYear(), new Date().getMonth()),
      },
    },
    {
      trabajo: t("experiencias.5.title"),
      descripcion: t("experiencias.5.description"),
      lugar: t("experiencias.5.place"),
      company: t("experiencias.5.company"),
      companyLink: t("experiencias.5.companyLink"),
      fechas: {
        inicio: new Date(2024, 5),
        fin: new Date(2024, 9),
      },
    },
    {
      trabajo: t("experiencias.6.title"),
      descripcion: t("experiencias.6.description"),
      lugar: t("experiencias.6.place"),
      company: t("experiencias.6.company"),
      companyLink: t("experiencias.6.companyLink"),
      fechas: {
        inicio: new Date(2024, 1),
        fin: new Date(2024, 4),
      },
    },
    {
      trabajo: t("experiencias.4.title"),
      descripcion: t("experiencias.4.description"),
      lugar: t("experiencias.4.place"),
      company: t("experiencias.4.company"),
      companyLink: t("experiencias.4.companyLink"),
      fechas: {
        inicio: new Date(2024, 1),
        fin: new Date(2024, 3),
      },
    },
    {
      trabajo: t("experiencias.3.title"),
      descripcion: t("experiencias.3.description"),
      lugar: t("experiencias.3.place"),
      company: t("experiencias.3.company"),
      companyLink: t("experiencias.3.companyLink"),
      fechas: {
        inicio: new Date(2023, 4),
        fin: new Date(2023, 11),
      },
    },
  ];
};
