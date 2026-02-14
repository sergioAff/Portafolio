"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import i18n from "@/config/i18next.config";

export default function Languaje() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  function onChangeLanguage(idioma: string) {
    i18n.changeLanguage(idioma);
    window.location.reload();
  }

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <motion.div
      ref={dropdownRef}
      className="relative text-gray-900"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="p-1.5 rounded-lg transition-all duration-200 hover:bg-white/30 active:scale-95"
        aria-label="Change language"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 text-orange-secondary hover:text-orange-primary transition-colors duration-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
          />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong shadow-glass absolute right-0 mt-2 px-3 py-2 rounded-xl flex flex-col gap-1 font-semibold min-w-[100px]"
          >
            <li>
              <button
                onClick={() => onChangeLanguage("es")}
                className="w-full text-left px-2 py-1 rounded-lg hover:bg-orange-100/50 hover:text-orange-600 transition-all duration-150"
              >
                Español
              </button>
            </li>
            <li>
              <button
                onClick={() => onChangeLanguage("en")}
                lang="en"
                className="w-full text-left px-2 py-1 rounded-lg hover:bg-orange-100/50 hover:text-orange-600 transition-all duration-150"
              >
                English
              </button>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
