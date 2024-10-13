import { SectionAbout3 } from "@/components/about/SectionAbout3";
import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { SiDjango, SiPostgresql, SiSqlite } from "react-icons/si";
import Image from "next/image";

interface BackendSectionInterface {
  up: ReactNode;
}

export function BackendSection({ up }: BackendSectionInterface) {
  return (
    <SectionAbout3
      title={"Backend"}
      body={
        <ul className="flex flex-wrap gap-6 lg:gap-8 items-center justify-around px-5 py-1">
          <li className="flex flex-col items-center transition-transform duration-100 ease-in-out hover:scale-105">
            <FontAwesomeIcon
              icon={faPython}
              className="w-10 h-auto"
              color="#3776AB"
            />
            <p className=" text-sm font-semibold text-gray-800">Python</p>
          </li>
          <li className="flex flex-col items-center transition-transform duration-100 hover:scale-105">
            <SiDjango className="w-10 h-auto" color="#0f6117" />{" "}
            <p className=" text-sm font-semibold text-gray-800">Django</p>
          </li>
          <li className="flex flex-col items-center transition-transform duration-100 hover:scale-105">
            <Image
              className="w-24 h-auto"
              color="#D22128"
              src={"/Logos/rest-framework.png"}
              alt={"Rest Framework"}
              width={1000}
              height={1000}
            />{" "}
            <p className=" text-sm font-semibold text-gray-800">
              REST Framework
            </p>
          </li>
          <li className="flex flex-col items-center transition-transform duration-100 hover:scale-105">
            <SiPostgresql className="w-10 h-auto" color="#336791" />{" "}
            <p className=" text-sm font-semibold text-gray-800">PostgreSQL</p>
          </li>
          <li className="flex flex-col items-center transition-transform duration-100 hover:scale-105">
            <SiSqlite className="w-10 h-auto" color="#003B57" />{" "}
            <p className=" text-sm font-semibold text-gray-800">SQLite</p>
          </li>
        </ul>
      }
      up={up}
    />
  );
}
