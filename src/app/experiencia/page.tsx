"use client";
import { useState } from "react";
import { Order } from "@/components/experience/Order";
import { motion } from "framer-motion";
import { TimeLine } from "@/components/experience/TimeLine";
import { Experiencia } from "@/data/experiencia";

export default function Page() {
  const [experiencias, setExperiencias] = useState([...Experiencia()]);

  const handleOrderChange = (order: "latest" | "oldest") => {
    const sortedExperiencias = [...experiencias].sort((a, b) => {
      const dateA = a.fechas.inicio.getTime();
      const dateB = b.fechas.inicio.getTime();
      return order === "latest" ? dateB - dateA : dateA - dateB;
    });
    setExperiencias(sortedExperiencias);
  };

  return (
    <motion.div
      className="flex flex-col px-5 py-5 mb-64 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-around">
        <Order onOrderChange={handleOrderChange} />
        <div></div>
      </div>
      <div className=" flex items-center justify-center">
        <TimeLine experiencias={experiencias} />
      </div>
    </motion.div>
  );
}
