import { useTranslation } from "react-i18next";

export const Frases = () => {
  const { t } = useTranslation("frases");

  return [
    { id: 1, frase: t("1.frase"), autor: t("1.autor") },
    { id: 2, frase: t("2.frase"), autor: t("2.autor") },
    { id: 3, frase: t("3.frase"), autor: t("3.autor") },
    { id: 4, frase: t("4.frase"), autor: t("4.autor") },
    { id: 5, frase: t("5.frase"), autor: t("5.autor") },
    { id: 6, frase: t("6.frase"), autor: t("6.autor") },
    { id: 7, frase: t("7.frase"), autor: t("7.autor") },
    { id: 8, frase: t("8.frase"), autor: t("8.autor") },
    { id: 9, frase: t("9.frase"), autor: t("9.autor") },
    { id: 10, frase: t("10.frase"), autor: t("10.autor") },
    { id: 11, frase: t("11.frase"), autor: t("11.autor") },
    { id: 12, frase: t("12.frase"), autor: t("12.autor") },
    { id: 13, frase: t("13.frase"), autor: t("13.autor") },
    { id: 14, frase: t("14.frase"), autor: t("14.autor") },
    { id: 15, frase: t("15.frase"), autor: t("15.autor") },
  ];
};
