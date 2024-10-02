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
    >
      <Links
        estilos={clsx(
          `px-3 py-2 rounded-lg hover:bg-transparent hover:ring-4 hover:outline-none hover:ring-orange-500 shadow-lg shadow-orange-600/50 font-medium transition-all ease-in duration-75 hover:bg-orange-50 hover:text-gray-700 active:scale-95`,
          {
            "bg-opacity-0 ring-2 ring-orange-500 text-black":
              pathname === linkContact.enlace,
            "bg-orange-500 text-gray-100": pathname !== linkContact.enlace,
          }
        )}
        direccion={linkContact.enlace}
        nombre={linkContact.nombre}
      ></Links>
    </motion.div>
  );
}
