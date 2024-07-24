import { contactos } from "../../data/contactos";
import { ContactCard } from "@/components/contact/ContactCard";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import Loading from "@/app/loading";

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <div className=" flex flex-col pt-5 animate-fadeBottom-for-contacts">
        <h3 className="text-3xl w-full text-center">Contactos</h3>
        <ul className="mt-[5dvh] grid place-items-center grid-cols-1 md:grid-cols-2 gap-16 pb-32 md:px-10">
          {contactos.map((contactos) => (
            <li
              key={contactos.via}
              className=" flex flex-col w-full sm:w-auto px-5 sm:px-0 "
            >
              <ContactCard
                icon={contactos.icon}
                direccion={contactos.direccion}
                enlace={contactos.enlace}
                title={contactos.via}
              />
            </li>
          ))}
        </ul>
      </div>
    </Suspense>
  );
}
