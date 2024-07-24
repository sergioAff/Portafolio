"use client";
import { useState } from "react";
import clsx from "clsx";

interface OrderProps {
  onOrderChange: (order: "latest" | "oldest" | "normal") => void;
}

export const Order = ({ onOrderChange }: OrderProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" flex sm:flex-row flex-col gap-1 justify-center items-center">
      <button
        onClick={() => setOpen(!open)}
        className="bg-orange-500 text-white hover:bg-orange-600 font-bold p-2 rounded-full"
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
          "border rounded-lg px-1 py-1 ring-2 ring-orange-secondary flex sm:flex-row flex-col lg:gap-5 gap-1 items-center ",
          {
            invisible: !open,
          }
        )}
      >
        <li>
          <button
            onClick={() => onOrderChange("latest")}
            className="hover:text-orange-500"
          >
            Recientes
          </button>
        </li>
        <li>
          <button
            onClick={() => onOrderChange("oldest")}
            className="hover:text-orange-500"
          >
            Antiguos
          </button>
        </li>
        <li>
          <button
            onClick={() => onOrderChange("normal")}
            className="hover:text-orange-500"
          >
            Normal
          </button>
        </li>
      </ul>
    </div>
  );
};
