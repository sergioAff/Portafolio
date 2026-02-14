"use client";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { CoverParticles } from "@/components/CoverParticles";
import { DescargarCv } from "@/components/home/DescagarCV";
import { AvatarComponent } from "@/components/home/Avatar";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Page() {
  const { t } = useTranslation(["welcome"]);
  return (
    <main className="flex relative flex-col gap-5 lg:gap-0 lg:flex-row items-center justify-center px-2 md:px-10 pt-3 md:pt-0 pb-10">
      <CoverParticles />
      <motion.div
        className="flex flex-col h-auto w-4/5 sm:w-3/5 lg:w-2/5 items-start"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <hgroup className="w-full">
          <motion.p
            variants={itemVariants}
            className="mt-4 text-4xl sm:text-5xl text-gray-600 select-none"
          >
            {t("Soy")}
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="gradient-text font-bold text-6xl sm:text-7xl"
          >
            Sergio Fernández
            <span className="animate-pulse">.</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-2 text-lg sm:text-xl text-gray-500 font-semibold"
          >
            {t("profesion")}{" "}
            <span className="gradient-text font-bold text-xl">
              &lt;/&gt;.
            </span>
          </motion.p>
        </hgroup>
        <motion.div variants={itemVariants}>
          <DescargarCv />
        </motion.div>
      </motion.div>
      <AvatarComponent />
    </main>
  );
}
