"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useState } from "react";
import { Modal } from "@/components/ModalExperience";

export interface Info {
  title: string;
  descripcion: string | undefined;
  preview?: string;
  imagen?: StaticImport | string;
  mostrar?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  lugar?: string;
  duracion?: string;
}

export const AnimateModal = ({ title, descripcion, lugar, duracion }: Info) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSetIsOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(true)}
        className=" rounded-lg bg-orange-500 text-sm sm:text-lg hover:bg-orange-primary active:bg-orange-primary text-white py-1 w-full"
      >
        Ver más
      </button>
      <Modal
        mostrar={isOpen}
        title={title}
        descripcion={descripcion}
        setIsOpen={handleSetIsOpen}
        lugar={lugar}
        duracion={duracion}
      />
    </div>
  );
};
