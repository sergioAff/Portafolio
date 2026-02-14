"use client";

import { Links } from "@/components/Links";
import { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ClipboardIcon,
  CheckCircleIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

interface ContactCardProps {
  icon: ReactNode;
  direccion: string;
  enlace: string;
  title: string;
}

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
    <div className="relative flex min-h-[23dvh] max-w-[90dvw] sm:max-w-[55dvw] md:max-w-[45dvw] lg:max-w-[33dvw] min-w-[90dvw] sm:min-w-[55dvw] md:min-w-[45dvw] lg:min-w-[33dvw] flex-col items-center justify-between rounded-2xl glass shadow-glass hover:shadow-glass-hover hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden py-4 group">
      {/* Subtle gradient border effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-orange-400/10 via-transparent to-amber-warm/10" />

      {showNotification && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="absolute top-1/3 z-10 w-3/5 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2.5 rounded-xl shadow-xl"
        >
          <p className="flex gap-2 justify-center items-center text-lg font-semibold tracking-wide">
            {title.replace(": ", "")} {t("Copiado")}{" "}
            <CheckCircleIcon className="w-6 h-6" />
          </p>
        </motion.div>
      )}
      <div className="pt-3 pb-1 flex flex-col justify-center items-center gap-2 relative">
        <Links nombre={icon} direccion={direccion} />
        <h3 className="text-2xl font-semibold text-gray-900">
          {title.replace(": ", "")}
        </h3>
      </div>
      <div className="w-full px-5 flex justify-center font-mono text-gray-600 font-medium relative">
        <Links direccion={direccion} nombre={enlace} target="_blank" />
      </div>
      <div className="flex justify-around w-full relative">
        <button
          onClick={() => handleCopy(enlace)}
          className="transition-all duration-200 w-1/2 flex items-center justify-center py-2"
        >
          <ClipboardIcon className="w-10 h-10 text-gray-700 p-2 hover:bg-orange-50 rounded-full hover:ring-2 ring-offset-2 transition-all duration-200 ease-out ring-orange-400/50 hover:ring-orange-400 hover:text-orange-600" />
        </button>
        <div className="w-1/2 flex items-center justify-center py-2">
          <Links
            direccion={direccion}
            nombre={
              <PaperAirplaneIcon className="w-10 h-10 p-2 text-gray-700 hover:bg-orange-50 rounded-full hover:ring-2 ring-offset-2 transition-all duration-200 ease-out ring-orange-400/50 hover:ring-orange-400 hover:text-orange-600" />
            }
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
};
