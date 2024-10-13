"use client";

import { Links } from "./Links";
import { useLinks } from "../data/links";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavLinks() {
  const enlaces = useLinks();
  const pathname = usePathname();

  return (
    <nav className=" pt-4 md:pt-0 flex items-center justify-center animate-fadeTop">
      <ul className="border border-orange-500 dark:border-orange-night shadow-lg bg-white/45 dark:bg-oscuro shadow-orange-800 dark:shadow-orange-night p-0.5 w-auto flex justify-center items-center rounded-2xl">
        {enlaces.map((link) => (
          <li key={link.id}>
            <Links
              direccion={link.enlace}
              nombre={link.nombre}
              estilos={clsx(
                "flex item-center justify-center w-full text-sm sm:text-base transition-all ease-in duration-75 rounded-xl px-2 sm:px-3 py-1 sm:py-0.5 font-semibold",
                {
                  "bg-orange-500 dark:bg-orange-night text-white font-semibold":
                    pathname === link.enlace,
                  "text-black": pathname !== link.enlace,
                  "hover:text-orange-500": pathname !== link.enlace,
                }
              )}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
