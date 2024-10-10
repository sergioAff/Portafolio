import { SectionAbout3 } from "@/components/about/SectionAbout3";
import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { SiDjango, SiPostgresql, SiSqlite } from "react-icons/si";

interface BackendSectionInterface {
  up: ReactNode;
}

export function BackendSection({ up }: BackendSectionInterface) {
  return (
    <SectionAbout3
      title={"Backend"}
      body={
        <ul className="flex flex-wrap  gap-6 lg:gap-8 items-center justify-around px-5 py-1">
          <li className="flex flex-col items-center transition-transform duration-100 ease-in-out hover:scale-105">
            <FontAwesomeIcon
              icon={faPython}
              className="w-10 h-auto"
              color="#E34F26"
            />
            <p className=" text-sm font-semibold text-gray-800">Python</p>
          </li>
          <li className="flex flex-col items-center transition-transform duration-100 hover:scale-105">
            <SiDjango className="w-10 h-auto" color="black" />
            <p className=" text-sm font-semibold text-gray-800">Django</p>
          </li>
          <li className="flex flex-col items-center transition-transform duration-100 hover:scale-105">
            <SiPostgresql className="w-10 h-auto" color="#007ACC" />
            <p className=" text-sm font-semibold text-gray-800">Postgresql</p>
          </li>{" "}
          <li className="flex flex-col items-center transition-transform duration-100 hover:scale-105">
            <SiSqlite className="w-10 h-auto" color="#007ACC" />
            <p className=" text-sm font-semibold text-gray-800">SQLite</p>
          </li>
          <li className="flex flex-col items-center transition-transform duration-100 hover:scale-105">
            <p className=" text-sm font-semibold text-gray-800">
              Rest Framework
            </p>
          </li>
        </ul>
      }
      up={up}
    />
  );
}
