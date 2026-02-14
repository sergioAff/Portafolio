"use client";
import { contactos } from "../../data/contactos";
import { ContactCard } from "@/components/contact/ContactCard";
import { useTranslation } from "react-i18next";
import { Frases } from "@/data/frases";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function ContactPage() {
  const { t } = useTranslation(["contactos"]);
  const frases = Frases();

  const animationSequence = frases.flatMap((frase) => [
    `${frase.frase} - ${frase.autor}`,
    7000,
  ]);

  return (
    <motion.div
      className="flex flex-col pt-5 w-full mb-36"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <h3 className="text-4xl text-center gradient-text font-bold pb-2">
        {t("Contactos")}
      </h3>

      <ul className="mt-[3vh] grid grid-cols-1 gap-8 pb-32 md:grid-cols-2 md:px-10 w-full">
        {contactos.map((contacto, index) => (
          <motion.li
            key={contacto.via}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center w-full"
          >
            <ContactCard
              icon={contacto.icon}
              direccion={contacto.direccion}
              enlace={contacto.enlace}
              title={contacto.via}
            />
          </motion.li>
        ))}

        <motion.li
          custom={contactos.length}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center w-full h-full"
        >
          <div className="flex min-h-[20dvh] max-w-[90dvw] sm:max-w-[55dvw] md:max-w-[45dvw] lg:max-w-[33dvw] min-w-[90dvw] sm:min-w-[55dvw] md:min-w-[45dvw] lg:min-w-[33dvw] p-5 glass rounded-2xl shadow-glass">
            <blockquote className="text-gray-800 text-xl font-semibold tracking-wide italic relative pl-4 border-l-4 border-orange-400/60">
              <TypeAnimation
                sequence={[...animationSequence]}
                speed={90}
                repeat={Infinity}
                wrapper="span"
              />
            </blockquote>
          </div>
        </motion.li>
      </ul>
    </motion.div>
  );
}
