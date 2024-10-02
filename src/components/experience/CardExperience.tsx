"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { mostrarFechas } from "@/utils/mostrarFechas";
import Image from "next/image";
import { AnimateModal } from "@/components/AnimateModalExperience";

interface PropCardExperience {
  title: string;
  preview: string;
  descripcion?: string;
  imagen?: StaticImport | string;
  lugar?: string;
  desde?: Date;
  hasta?: Date | "Actual";
  mes?: string;
  ano?: number | "";
}

export function CardExperience({
  title,
  preview,
  imagen,
  descripcion,
  lugar,
  desde,
  hasta,
  mes,
  ano,
}: PropCardExperience) {
  return (
    <div className="border border-orange-600 outline-none w-64 h-96 mx-5 transition-all duration-75 flex flex-col justify-around shadow-md shadow-orange-800 rounded-md">
      <div className="flex flex-col p-2 justify-between items-center px-5">
        <div className="w-full border-b-2 border-orange-primary mx-5">
          <h3 className="text-md sm:text-xl font-semibold text-center pb-1">
            {title}
          </h3>
          {mes && ano && (
            <div className="text-gray-500 font-semibold text-sm sm:text-md">
              {mes} {ano}
            </div>
          )}
        </div>
        <div className="pt-3">
          <p className="text-black font-semibold text-sm sm:text-md">
            {preview}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center w-full px-3 py-2">
        <AnimateModal
          title={title}
          descripcion={descripcion}
          preview={preview}
          lugar={lugar}
          duracion={mostrarFechas(desde, hasta)}
        />
      </div>
      <div className="h-32 w-full flex justify-center items-center px-1">
        {imagen && (
          <Image
            src={imagen}
            alt={title}
            title={title}
            width={300}
            height={128}
            className="rounded-sm object-cover w-full h-full"
          />
        )}
      </div>
    </div>
  );
}
