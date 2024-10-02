import { useTranslation } from "react-i18next";

interface Info {
  id: number;
  title: string;
  preview: string;
  descripcion: string;
}

export const useAbout = (): Info[] => {
  const { t } = useTranslation("about");

  return [
    {
      id: 1,
      title: t("about.1.title"),
      preview: t("about.1.preview"),
      descripcion: t("about.1.descripcion"),
    },
    {
      id: 2,
      title: t("about.2.title"),
      preview: t("about.2.preview"),
      descripcion: t("about.2.descripcion"),
    },
    {
      id: 3,
      title: t("about.3.title"),
      preview: t("about.3.preview"),
      descripcion: t("about.3.descripcion"),
    },
    {
      id: 4,
      title: t("about.4.title"),
      preview: t("about.4.preview"),
      descripcion: t("about.4.descripcion"),
    },
  ];
};
