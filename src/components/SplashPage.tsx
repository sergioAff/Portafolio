import { useTranslation } from "react-i18next";
import Image from "next/image";

interface BienvenidoProps {
  fadeOut: boolean;
}

export const SplashPageFaster = () => {
  const { t } = useTranslation(["welcome"]);

  return (
    <div
      className={`absolute inset-0 z-50 flex flex-col items-center justify-center bg-claro dark:bg-oscuro text-orange-500 cursor-pointer `}
    >
      <Image
        src="/Logos/icono.png"
        alt={t("Logo de S@ff")}
        width={150}
        height={200}
        className="contrast-75"
      />
    </div>
  );
};

export const SplashPage: React.FC<BienvenidoProps> = ({ fadeOut }) => {
  const { t } = useTranslation(["welcome"]);

  return (
    <div
      className={`absolute inset-0 z-50 flex flex-col items-center justify-center bg-claro dark:bg-oscuro text-orange-500 cursor-pointer transition-all duration-1000 ${
        fadeOut ? "animate-fadeOut" : "animate-fadeIn"
      }`}
      role="dialog"
      aria-label={t("Welcome")}
    >
      <Image
        src="/Logos/icono.png"
        alt={t("Logo de S@ff")}
        width={200}
        height={400}
        className="animate-bounce contrast-75"
      />
      <h1 className="text-4xl sm:text-6xl font-bold contrast-75 brightness-90">
        {t("Welcome")}
      </h1>
    </div>
  );
};
