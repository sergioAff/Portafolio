import { useTranslation } from "react-i18next";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export const DescargarCv = () => {
  const { t } = useTranslation("home");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="relative flex flex-col items-start justify-start mt-6 min-h-32">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`shimmer relative px-4 py-2 rounded-xl font-semibold transition-all ease-out duration-300 active:scale-95 ${isOpen
            ? "glass text-gray-700 shadow-glass"
            : "bg-gradient-to-r from-orange-500 to-orange-tertiary text-white shadow-orange-glow hover:shadow-orange-glow-lg hover:scale-105"
          }`}
      >
        <p className="flex gap-2 items-center">
          {t("Descargar")} CV
          <DocumentArrowDownIcon className="w-5" />
        </p>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col gap-2 items-start justify-center mt-4 ml-1"
            initial={{ opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -12, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              download="CV Sergio Fernández Español.pdf"
              onClick={() => setIsOpen(false)}
              className="text-lg hover:scale-105 hover:text-orange-500 tracking-wide active:scale-95 transition-all ease-out duration-200 font-semibold flex items-center gap-2"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1I1MhhxOh79vqUJmCF6oIoDl9wJsirOXg/view?usp=sharing"
              target="_blank"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              Español
            </Link>
            <Link
              download="CV Sergio Fernández English.pdf"
              className="text-lg hover:scale-105 tracking-wide hover:text-orange-500 active:scale-95 transition-all ease-out duration-200 font-semibold flex items-center gap-2"
              onClick={() => setIsOpen(false)}
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1qZrhkNhtHSxPVhFY6n0vSYI8cWr1k5Px/view?usp=sharing"
              target="_blank"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              English
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
