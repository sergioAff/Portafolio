"use client";
import { Experiencia } from "../../data/experiencia";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Order } from "@/components/experience/Order";
import { AnimatePresence, motion } from "framer-motion";

export default function Page() {
  const { t } = useTranslation(["experiencias"]);
  const [experiencias, setExperiencias] = useState(Experiencia());
  const [originalExperiencias] = useState(Experiencia());
  const [showDates, setShowDates] = useState(true);

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

  return (
    <motion.div
      className="flex flex-col px-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex">
        <Order onOrderChange={handleOrderChange} />
      </div>
    </motion.div>
  );
}
