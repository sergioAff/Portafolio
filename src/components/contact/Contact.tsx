"use client";

import { useLinkContact } from "@/data/links";
import { Links } from "../Links";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Contact() {
  const pathname = usePathname();
  const linkContact = useLinkContact();
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, x: 50 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.5 }}
      className="contrast-125"
    >
      <Links
        estilos={clsx(
          `px-3 py-2 rounded-lg hover:bg-transparent hover:ring-4 hover:outline-none hover:ring-orange-500 dark:hover:ring-orange-night shadow-lg text-lg shadow-orange-600/50 dark:shadow-orange-night/50 transition-all ease-in duration-75 hover:bg-orange-50 dark:hover:bg-orange-night/20 hover:text-gray-700 dark:hover:text-orange-100/80 active:scale-95 font-semibold`,
          {
            "bg-opacity-0 ring-2 ring-orange-500 dark:ring-orange-night text-black dark:text-orange-primary":
              pathname === linkContact.enlace,
            "bg-orange-500 dark:bg-orange-night dark:contrast-125 dark:text-orange-50 text-gray-100":
              pathname !== linkContact.enlace,
          }
        )}
        direccion={linkContact.enlace}
        nombre={linkContact.nombre}
      ></Links>
    </motion.div>
  );
}
