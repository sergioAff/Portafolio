"use client";
import { contactos } from "../../data/contactos";
import { ContactCard } from "@/components/contact/ContactCard";
import { useTranslation } from "react-i18next";
import { Frases } from "@/data/frases";
import { TypeAnimation } from "react-type-animation";

export default function ContactPage() {
  const { t } = useTranslation(["contactos"]);
  const frases = Frases();

  const animationSequence = frases.flatMap((frase) => [
    `${frase.frase} - ${frase.autor}`,
    7000,
  ]);

  return (
    <div className="flex flex-col pt-5 w-full animate-fadeBottom-for-contacts">
      <h3 className="text-4xl text-center text-gray-900">{t("Contactos")}</h3>

      <ul className="mt-[3vh] grid grid-cols-1 gap-8 pb-32 md:grid-cols-2 md:px-10 w-full">
        {contactos.map((contacto) => (
          <li key={contacto.via} className="flex justify-center w-full">
            <ContactCard
              icon={contacto.icon}
              direccion={contacto.direccion}
              enlace={contacto.enlace}
              title={contacto.via}
            />
          </li>
        ))}

        <li className="flex items-center justify-center w-full h-full">
          <div className="flex min-h-[20dvh] max-w-[90dvw] sm:max-w-[55dvw] md:max-w-[45dvw] lg:max-w-[33dvw] min-w-[90dvw] sm:min-w-[55dvw] md:min-w-[45dvw] lg:min-w-[33dvw] p-5">
            <blockquote className="text-black text-xl font-semibold tracking-wide italic">
              <TypeAnimation
                sequence={[...animationSequence]}
                speed={90}
                repeat={Infinity}
                wrapper="span"
              />
            </blockquote>
          </div>
        </li>
      </ul>
    </div>
  );
}
