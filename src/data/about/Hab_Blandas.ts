import { useTranslation } from "react-i18next";

export const HabilidadesBlandas = () => {
  const { t } = useTranslation(["about"]);
  return [
    t("habilidades_blandas.lista.1"),
    t("habilidades_blandas.lista.2"),
    t("habilidades_blandas.lista.3"),
    t("habilidades_blandas.lista.4"),
    t("habilidades_blandas.lista.5"),
    t("habilidades_blandas.lista.6"),
    t("habilidades_blandas.lista.7"),
    t("habilidades_blandas.lista.8"),
    t("habilidades_blandas.lista.9"),
    t("habilidades_blandas.lista.10"),
  ];
};
