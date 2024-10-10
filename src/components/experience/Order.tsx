"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

interface OrderProps {
  onOrderChange: (order: "latest" | "oldest" | "normal") => void;
}

export const Order = ({ onOrderChange }: OrderProps) => {
  const { t } = useTranslation(["order"]);
  const [open, setOpen] = useState(false);

  return (
    <div className=" flex flex-row gap-2 justify-center items-center ">
      <button
        onClick={() => setOpen(!open)}
        className="bg-orange-500 text-white hover:bg-orange-600 font-bold p-2 rounded-full shadow-lg "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
          />
        </svg>
      </button>
      <ul
        className={clsx(
          "rounded-md shadow-lg font-semibold transition-all duration-75 bg-white/45 ease-in-out ring-orange-secondary flex flex-row gap-2 items-center overflow-hidden",
          {
            "max-w-0": !open,
            "max-w-screen, px-2 py-1 ring-2": open,
          }
        )}
      >
        <li>
          <button
            onClick={() => onOrderChange("latest")}
            className="hover:text-orange-500"
          >
            {t("Recientes")}
          </button>
        </li>
        <li>
          <button
            onClick={() => onOrderChange("oldest")}
            className="hover:text-orange-500"
          >
            {t("Antiguos")}
          </button>
        </li>
        <li>
          <button
            onClick={() => onOrderChange("normal")}
            className="hover:text-orange-500"
          >
            {t("Normal")}
          </button>
        </li>
      </ul>
    </div>
  );
};
