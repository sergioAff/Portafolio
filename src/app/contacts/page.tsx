"use client";
import { contactos } from "../../data/contactos";
import { ContactCard } from "@/components/contact/ContactCard";
import { useTranslation } from "react-i18next";

export default function ContactPage() {
  const { t } = useTranslation(["contactos"]);

  return (
    <div className="flex flex-col pt-5 animate-fadeBottom-for-contacts">
      <h3 className="text-3xl w-full text-center">{t("Contactos")}</h3>
      <ul className="mt-[5vh] grid place-items-center grid-cols-1 lg:grid-cols-2 gap-12 pb-32 md:px-10">
        {contactos.map((contacto) => (
          <li
            key={contacto.via}
            className="flex flex-col w-full md:w-auto px-5 sm:px-32"
          >
            <ContactCard
              icon={contacto.icon}
              direccion={contacto.direccion}
              enlace={contacto.enlace}
              title={contacto.via}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
