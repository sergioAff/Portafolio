"use client";
import { CardExperience } from "@/components/experience/CardExperience";
import { useExperience } from "../../data/experiencia";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Order } from "@/components/experience/Order";
import { AnimatePresence, motion } from "framer-motion";

export default function Page() {
  const { t } = useTranslation(["experiencias"]);
  const [experiencias, setExperiencias] = useState(useExperience());
  const [originalExperiencias] = useState(useExperience());
  const [showDates, setShowDates] = useState(true);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    const scrollAmount = 450;

    if (container) {
      if (direction === "left") {
        container.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else if (direction === "right") {
        container.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }

      setScrollPosition(container.scrollLeft);
    }
  };

  const handleOrderChange = (order: "latest" | "oldest" | "normal") => {
    let sortedExperiencias;

    if (order === "normal") {
      setExperiencias(originalExperiencias);
      setShowDates(false);
    } else {
      sortedExperiencias = [...originalExperiencias].sort((a, b) => {
        const dateA = a.fechas.fin instanceof Date ? a.fechas.fin : new Date();
        const dateB = b.fechas.fin instanceof Date ? b.fechas.fin : new Date();
        return order === "latest"
          ? dateB.getTime() - dateA.getTime()
          : dateA.getTime() - dateB.getTime();
      });

      setExperiencias(sortedExperiencias);
      setShowDates(true);
    }
  };

  const getMonthName = (date: Date) => {
    const monthNames = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    return monthNames[date.getMonth()];
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      setScrollPosition(container.scrollLeft);

      const handleManualScroll = () => {
        setScrollPosition(container.scrollLeft);
      };

      container.addEventListener("scroll", handleManualScroll);
      return () => container.removeEventListener("scroll", handleManualScroll);
    }
  }, []);

  return (
    <motion.div
      className="relative flex flex-col justify-between mt-5 lg:mt-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex px-5">
        <div className="z-10">
          <Order onOrderChange={handleOrderChange} />
        </div>
        <div className="absolute inset-x-0 top-0 flex justify-center ml-5">
          <h3 className="text-3xl z-1">{t("Experiencia")}</h3>
        </div>
      </div>
      <div
        ref={containerRef}
        className="flex flex-col items-center sm:flex-row gap-20 py-3 sm:py-5 overflow-auto scrollbar-hide scroll-smooth"
      >
        <AnimatePresence>
          {experiencias.map((item) => {
            const date =
              item.fechas.fin instanceof Date ? item.fechas.fin : new Date();
            const month = getMonthName(date);
            const year = date.getFullYear();

            return (
              <div key={item.trabajo} className="">
                <CardExperience
                  title={item.trabajo}
                  preview={item.preview}
                  imagen={item.imagen}
                  descripcion={item.descripcion}
                  lugar={item.lugar}
                  desde={item.fechas.inicio}
                  hasta={item.fechas.fin}
                  mes={showDates ? month : ""}
                  ano={showDates ? year : ""}
                />
              </div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="sm:flex justify-between mb-5 px-5 hidden">
        <button
          className="bg-orange-500 hover:bg-orange-secondary text-white font-bold py-2 px-4 rounded-full hover:cursor-pointer"
          onClick={() => handleScroll("left")}
          disabled={scrollPosition === 0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-secondary text-white font-bold py-2 px-4 rounded-full"
          onClick={() => handleScroll("right")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
