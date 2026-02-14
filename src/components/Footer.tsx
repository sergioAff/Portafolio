"use client";
import { useTranslation } from "react-i18next";
import { Links } from "./Links";
import { contactos } from "@/data/contactos";
import { Olas } from "@/components/Olas";

export function Footer() {
  const { t } = useTranslation(["footer"]);
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative mt-5 text-gray-700 flex flex-col w-full py-2">
      <div className="px-5 flex flex-col gap-5 md:flex-row w-full justify-between items-center">
        <nav className="px-5 w-1/2 z-30">
          <ul className="flex justify-center h-full gap-5 items-center w-full">
            {contactos.map((contacto) => (
              <li key={contacto.via}>
                <Links
                  direccion={contacto.direccion}
                  nombre={contacto.icon}
                  estilos="hover:text-orange-600 hover:scale-110 transition-all duration-200 ease-out"
                  target={contacto.target}
                />
              </li>
            ))}
          </ul>
        </nav>
        <ul className="md:justify-center md:items-center md:h-16 h-6 md:w-[50dvw] flex justify-start items-start">
          <li className="font-semibold text-sm sm:text-lg flex md:flex-col z-30">
            {t("autor")}
            <div className="ml-2 inline-block hover:scale-105 duration-200 transition-transform">
              <Links
                direccion="https://linkedin.com/in/sergio-adrian-fernández"
                nombre="Sergio Fernández"
                estilos="text-orange-700 hover:text-orange-500 transition-colors duration-200"
                target="_blank"
              />
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-5 md:mx-[10dvw] lg:mx-[20dvw] mx-10 cursor-default border-t border-orange-400/40 items-center flex justify-center text-center pt-3">
        <h3 className="font-semibold text-sm sm:text-lg z-30 text-gray-600">
          &copy; {currentYear} S@ff. {t("derechos")}
        </h3>
      </div>
      <div className="animate-fadeBottom absolute w-full h-screen bottom-0 pointer-events-auto">
        <Olas />
      </div>
    </footer>
  );
}
