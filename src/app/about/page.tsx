"use client";
import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/about/Card";
import { useAbout } from "@/data/about";
import { AgeCalculator } from "@/components/about/edad";
import { motion } from "framer-motion";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

export default function Page() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const about = useAbout();
  const { t } = useTranslation(["about"]);

  const handleScroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    const scrollAmount = 450;

    if (container) {
      if (direction === "left") {
        container.scrollTo({
          left: container.scrollLeft - scrollAmount,
          behavior: "smooth",
        });
      } else if (direction === "right") {
        container.scrollTo({
          left: container.scrollLeft + scrollAmount,
          behavior: "smooth",
        });
      }

      setScrollPosition(container.scrollLeft);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const updateScrollPosition = () =>
        setScrollPosition(container.scrollLeft);
      container.addEventListener("scroll", updateScrollPosition);

      setScrollPosition(container.scrollLeft);

      return () => {
        container.removeEventListener("scroll", updateScrollPosition);
      };
    }
  }, []);

  return (
    <Suspense>
      <motion.div
        className="flex flex-col justify-between gap-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
      >
        <h1 className="text-center text-3xl mb-1">{t("Sobre mi")}</h1>
        <div
          className="flex flex-col items-center sm:flex-row gap-20 py-3 sm:py-5 overflow-auto scrollbar-hide scroll-smooth"
          ref={containerRef}
        >
          {about.map((info) => (
            <Card
              key={info.id}
              title={info.title}
              descripcion={info.descripcion}
              preview={info.preview}
            />
          ))}
        </div>
        <div className="sm:flex hidden justify-between mb-5 px-5">
          <button
            className="bg-orange-500 hover:bg-orange-secondary active:bg-orange-secondary text-white font-bold py-2 px-4 rounded-full hover:cursor-pointer"
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
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button
            className="bg-orange-500 hover:bg-orange-secondary active:bg-orange-secondary text-white font-bold py-2 px-4 rounded-full hover:cursor-pointer"
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
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div className="max-h-[15dvh] flex mb-10 justify-center items-end">
          <AgeCalculator />
        </div>
      </motion.div>
    </Suspense>
  );
}
