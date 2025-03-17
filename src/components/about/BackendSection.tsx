import { SectionAbout3 } from "@/components/about/SectionAbout3";
import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faJava } from "@fortawesome/free-brands-svg-icons";
import { SiDjango, SiSpringboot, SiPostgresql } from "react-icons/si";

interface BackendSectionInterface {
  up: ReactNode;
}

export function BackendSection({ up }: BackendSectionInterface) {
  return (
    <SectionAbout3
      title={"Backend"}
      body={
        <ul className="flex flex-wrap gap-6 lg:gap-8 items-center justify-around px-5 py-1">
          <li className="flex flex-col items-center  ease-in-out ">
            <FontAwesomeIcon
              icon={faPython}
              className="w-10 h-auto"
              color="#3776AB"
            />
            <p className=" text-sm font-semibold text-gray-800">Python</p>
          </li>
          <li className="flex flex-col items-center  ">
            <SiDjango className="w-10 h-auto" color="#0f6117" />{" "}
            <p className=" text-sm font-semibold text-gray-800">Django</p>
          </li>
          <li className="flex flex-col items-center  ">
            <FontAwesomeIcon
              icon={faJava}
              className="w-10 h-auto"
              color="#007396"
            />
            <p className=" text-sm font-semibold text-gray-800">Java</p>
          </li>
          <li className="flex flex-col items-center  ">
            <SiSpringboot className="w-10 h-auto" color="#6DB33F" />{" "}
            <p className=" text-sm font-semibold text-gray-800">Spring</p>
          </li>
          <li className="flex flex-col items-center  ">
            <SiPostgresql className="w-10 h-auto" color="#336791" />{" "}
            <p className=" text-sm font-semibold text-gray-800">PostgreSQL</p>
          </li>
        </ul>
      }
      up={up}
    />
  );
}
