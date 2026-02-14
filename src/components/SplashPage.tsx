import { useTranslation } from "react-i18next";
import Image from "next/image";

export const SplashPageFaster = () => {
  const { t } = useTranslation(["welcome"]);

  return (
    <div className="splash absolute inset-0 z-50 flex flex-col items-center justify-center bg-claro cursor-pointer">
      <div className="relative">
        {/* Glow behind logo */}
        <div className="absolute -inset-8 rounded-full bg-orange-400/20 blur-2xl animate-glow-pulse" />
        <Image
          src="/Logos/logo.png"
          alt={t("Logo de S@ff")}
          width={150}
          height={200}
          priority
          className="relative saturate-200 brightness-90 contrast-75 animate-float"
        />
      </div>
    </div>
  );
};
