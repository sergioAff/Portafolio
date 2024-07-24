"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { useTranslation } from "react-i18next";
import i18n from "@/config/i18next.config";

export default function Languaje() {
  const [Language, setLanguage] = useState("es");
  const [open, setOpen] = useState(false);

  function onChangeLanguage(idioma: string) {
    setLanguage(idioma);
    i18n.changeLanguage(idioma);
  }

  function onChangeOpen() {
    setOpen(!open);
  }

  return (
    <span onClick={onChangeOpen} className=" relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6 text-orange-secondary hover:text-orange-primary cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
        />
      </svg>

      <ul
        className={clsx(
          "ring-2 ring-orange-secondary absolute left-[-9dvh] lg:left-[-3dvh] px-2 rounded-md sm:mt-5 mt-4 flex lg:flex-col gap-2 transition-opacity duration-75 ease-in-out",
          { "opacity-0": open }
        )}
      >
        <li>
          <button
            onClick={() => onChangeLanguage("es")}
            className=" hover:text-orange-500"
          >
            Español
          </button>
        </li>
        <li>
          <button
            onClick={() => onChangeLanguage("en")}
            lang="en"
            className=" hover:text-orange-500"
          >
            English
          </button>
        </li>
      </ul>
    </span>
  );
}
