"use client";

import { Links } from "@/components/Links";
import { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";

interface ContactCardProps {
  icon: ReactNode;
  direccion: string;
  enlace: string;
  title: string;
}

const visitIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-12 h-12 p-2 text-gray-900 hover:bg-gray-100 rounded-full hover:ring-2 ring-offset-2 transition-all duration-100 ease-in-out ring-orange-400/50 hover:ring-orange-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 12L3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
    />
  </svg>
);

const correctIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

export const ContactCard = ({
  icon,
  direccion,
  enlace,
  title,
}: ContactCardProps) => {
  const { t } = useTranslation(["contactos"]);
  const [showNotification, setShowNotification] = useState(false);

  const handleCopy = (enlace: string) => {
    navigator.clipboard
      .writeText(enlace)
      .then(() => {
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 2500);
      })
      .catch((err) => {
        console.error("Error al copiar el texto: ", err);
      });
  };

  return (
    <>
      <div className="relative flex min-h-[23dvh]  max-w-[90dvw] sm:max-w-[55dvw] md:max-w-[45dvw] lg:max-w-[33dvw] 2xl:max-w-[25dvw] min-w-[90dvw] sm:min-w-[55dvw] md:min-w-[45dvw] lg:min-w-[33dvw] 2xl:min-w-[25dvw] flex-col items-center justify-between rounded-xl shadow-md hover:ring ring-orange-tertiary hover:ring-offset-2 bg-white/30 transition-all duration-100 ease-in-out transform overflow-hidden py-3">
        {showNotification && (
          <div className="animate-fadeTop absolute top-1/3 w-3/5 bg-green-500 text-white py-2 rounded-lg shadow-xl">
            <p className="flex gap-2 justify-center items-center text-lg 2xl:text-2xl font-semibold tracking-wide">
              {title.replace(": ", "")} {t("Copiado")}{" "}
              <span>{correctIcon}</span>
            </p>
          </div>
        )}
        <div className="pt-3 pb-1 flex flex-col justify-center items-center gap-2">
          <Links nombre={icon} direccion={direccion} />
          <h3 className="text-2xl 2xl:text-3xl font-semibold text-gray-900">
            {title.replace(": ", "")}
          </h3>
        </div>
        <div className="w-full px-5 flex justify-center 2xl:text-xl font-mono text-gray-600 font-medium">
          <Links direccion={direccion} nombre={enlace} target="_blank" />
        </div>
        <div className=" flex justify-around w-full">
          <button
            onClick={() => handleCopy(enlace)}
            className="transition-colors duration-200 w-1/2 flex items-center justify-center py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12 text-gray-900 p-2 hover:bg-gray-100 rounded-full hover:ring-2 ring-offset-2 transition-all duration-100 ease-in-out ring-orange-400/50 hover:ring-orange-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
              />
            </svg>
          </button>
          <div className="w-1/2 flex items-center justify-center py-2">
            <Links direccion={direccion} nombre={visitIcon} target="_blank" />
          </div>
        </div>
      </div>
    </>
  );
};
