"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDarkMode = theme === "dark";

  function onChange() {
    setTheme(isDarkMode ? "light" : "dark");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-1"
    >
      <motion.button
        onClick={onChange}
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: isDarkMode ? 0 : 1, scale: isDarkMode ? 0.8 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ display: isDarkMode ? "none" : "inline-block" }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-7 hover:fill-orange-secondary text-orange-secondary cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </motion.svg>
      </motion.button>

      <motion.button
        onClick={onChange}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isDarkMode ? 1 : 0, scale: isDarkMode ? 1 : 0.8 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ display: isDarkMode ? "inline-block" : "none" }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 hover:fill-orange-secondary  text-orange-secondary cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </motion.svg>
      </motion.button>
    </motion.div>
  );
}
