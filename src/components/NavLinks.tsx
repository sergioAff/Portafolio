"use client";

import { Links } from "./Links";
import { useLinks } from "../data/links";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function NavLinks() {
  const enlaces = useLinks();
  const pathname = usePathname();

  return (
    <nav className="pt-4 md:pt-0 flex items-center justify-center animate-fadeTop">
      <ul className="glass-strong shadow-glass rounded-2xl p-1 w-auto flex justify-center items-center gap-0.5">
        {enlaces.map((link) => (
          <li key={link.id} className="relative">
            {pathname === link.enlace && (
              <motion.div
                layoutId="activeNavPill"
                className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-secondary to-orange-tertiary rounded-xl shadow-orange-glow"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
            <Links
              direccion={link.enlace}
              nombre={link.nombre}
              estilos={`relative z-10 flex items-center justify-center w-full text-sm sm:text-base transition-all ease-out duration-200 rounded-xl px-3 sm:px-4 py-1 sm:py-1 font-semibold hover:scale-105 ${pathname === link.enlace
                  ? "text-white"
                  : "text-gray-700 hover:text-orange-600"
                }`}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
