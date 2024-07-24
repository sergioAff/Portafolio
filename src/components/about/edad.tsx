"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

interface Age {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
}

const calculateAge = (birthDate: Date): Age => {
  const now = new Date();

  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();
  let hours = now.getHours() - birthDate.getHours();
  let minutes = now.getMinutes() - birthDate.getMinutes();

  if (minutes < 0) {
    minutes += 60;
    hours--;
  }

  if (hours < 0) {
    hours += 24;
    days--;
  }

  if (days < 0) {
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += previousMonth.getDate();
    months--;
  }

  if (months < 0) {
    months += 12;
    years--;
  }

  return {
    years,
    months,
    days,
    hours,
    minutes,
  };
};

export const AgeCalculator: React.FC = () => {
  const birthDate = useMemo(() => new Date(2002, 1, 9), []);
  const [age, setAge] = useState<Age>(calculateAge(birthDate));
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation(["about"]);

  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAge(calculateAge(birthDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [birthDate]);

  function onChangeVisible() {
    setVisible(!visible);
  }

  return (
    <div className="flex flex-col w-full rounded-lg duration-300">
      <motion.h2
        className="text-sm sm:text-xl text-center font-semibold sm:mb-4 mb-1"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("Tengo")}
      </motion.h2>
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-sm sm:text-lg overflow-hidden">
          <span className="font-semibold text-orange-500">{age.years}</span>{" "}
          {t("anos")}
        </p>
        <p className="px-1 text-sm sm:text-lg">
          <span className="font-semibold text-orange-500">{age.months}</span>{" "}
          {t("meses")}
        </p>
        <AnimatePresence>
          {visible && (
            <motion.div
              className="flex flex-wrap justify-center"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm sm:text-lg px-1">
                <span className="font-semibold text-orange-500">
                  {age.days}
                </span>{" "}
                {t("dias")}
              </p>
              <p className="text-sm sm:text-lg px-1">
                <span className="font-semibold text-orange-500">
                  {age.hours}
                </span>{" "}
                {t("horas")}
              </p>
              <p className="text-sm sm:text-lg px-1">
                <span className="font-semibold text-orange-500">
                  {age.minutes}
                </span>{" "}
                {t("minutos")}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          onClick={onChangeVisible}
          className="bg-orange-500 active:bg-orange-secondary hover:bg-orange-secondary px-2 rounded-full mt-1"
          initial={{ rotate: 0 }}
          animate={{ rotate: visible ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {arrow}
        </motion.button>
      </motion.div>
    </div>
  );
};
