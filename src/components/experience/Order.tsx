"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BlurButtons } from "@/components/BlurButtons";
import clsx from "clsx";

interface OrderProps {
  onOrderChange: (order: "latest" | "oldest") => void;
}

export const Order = ({ onOrderChange }: OrderProps) => {
  const { t } = useTranslation(["order"]);
  const [open, setOpen] = useState(false);

  function handleCharger(order: "latest" | "oldest") {
    onOrderChange(order);
    setOpen(false);
  }

  return (
    <div className=" flex flex-row gap-2 justify-start items-center w-[80%] lg:w-[25%]">
      <button
        onClick={() => setOpen(!open)}
        className={clsx(
          "relative p-2 rounded-full shadow-lg hover:bg-transparent hover:ring-2 hover:outline-none hover:ring-orange-500 shadow-orange-600/50 transition-all ease-in duration-100 hover:text-gray-700 active:scale-95  text-gray-100",
          {
            "bg-orange-500": !open,
            "ring-2 ring-orange-500 text-gray-700": open,
          }
        )}
      >
        <BlurButtons />
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
          "rounded-md shadow-lg font-semibold transition-all duration-75 bg-white/45 ease-in-out ring-orange-secondary flex flex-row gap-2 items-center overflow-hidden text-gray-800",
          {
            "max-w-0": !open,
            "max-w-screen, px-2 py-1 ring-2": open,
          }
        )}
      >
        <li>
          <button
            onClick={() => handleCharger("latest")}
            className="hover:text-orange-500"
          >
            {t("Recientes")}
          </button>
        </li>
        <li>
          <button
            onClick={() => handleCharger("oldest")}
            className="hover:text-orange-500"
          >
            {t("Antiguos")}
          </button>
        </li>
      </ul>
    </div>
  );
};
