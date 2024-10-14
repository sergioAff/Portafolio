import { useTranslation } from "react-i18next";
import Image from "next/image";

interface BienvenidoProps {
  fadeOut: boolean;
}

export const SplashPageFaster = () => {
  const { t } = useTranslation(["welcome"]);

  return (
    <div
      className={`absolute inset-0 z-50 flex flex-col items-center justify-center bg-claro dark:bg-oscuro  cursor-pointer `}
    >
      <Image
        src="/Logos/logo.png"
        alt={t("Logo de S@ff")}
        width={150}
        height={200}
        className="saturate-200 brightness-90 contrast-75"
      />
    </div>
  );
};
