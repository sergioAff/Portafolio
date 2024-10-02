"use client";
import { useState } from "react";
import { Modal } from "@/components/Modal";
import { useTranslation } from "react-i18next";

export interface Info {
  title: string;
  descripcion: string | undefined;
  preview?: string;
  mostrar?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}

export const AnimateModal = ({ title, descripcion }: Info) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation(["about"]);

  const handleSetIsOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(true)}
        className=" rounded-lg bg-orange-500 text-sm sm:text-lg hover:bg-orange-primary active:bg-orange-primary text-white py-1 w-full"
      >
        {t("Ver más")}
      </button>
      <Modal
        mostrar={isOpen}
        title={title}
        descripcion={descripcion}
        setIsOpen={handleSetIsOpen}
      />
    </div>
  );
};
