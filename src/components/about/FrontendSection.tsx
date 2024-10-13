import { SectionAbout3 } from "@/components/about/SectionAbout3";
import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";

interface FrontendSectionInterface {
  up: ReactNode;
}

export function FrontendSection({ up }: FrontendSectionInterface) {
  return (
    <SectionAbout3
      title={"Frontend"}
      body={
        <ul className="flex flex-wrap gap-6 lg:gap-8 items-end justify-around px-5 py-1">
          <li className="flex flex-col items-center transition-transform duration-100 ease-in-out hover:scale-105">
            <FontAwesomeIcon
              icon={faHtml5}
              className="w-10 h-auto"
              color="#E34F26"
            />
            <p className=" text-sm font-semibold text-gray-800">HTML</p>
          </li>
          <li className="flex flex-col items-center transition-transform duration-100 hover:scale-105">
            <FontAwesomeIcon
              icon={faCss3Alt}
              className="w-10 h-auto"
              color="#1572B6"
            />
            <p className=" text-sm font-semibold text-gray-800">CSS</p>
          </li>
          <li className="flex flex-col items-center transition-transform duration-100 hover:scale-105">
            <SiTailwindcss className="w-10 h-auto" color="#06B6D4" />
            <p className=" text-sm font-semibold text-gray-800">TailwindCSS</p>
          </li>
          <li className="flex flex-col items-center transition-transform duration-100 hover:scale-105">
            <FontAwesomeIcon
              icon={faJsSquare}
              className="w-10 h-auto"
              color="#F7DF1E"
            />
            <p className=" text-sm font-semibold text-gray-800">JavaScript</p>
          </li>
          <li className="flex flex-col items-center transition-transform duration-100 hover:scale-105">
            <SiTypescript className="w-10 h-auto" color="#007ACC" />
            <p className=" text-sm font-semibold text-gray-800">TypeScript</p>
          </li>
          <li className="flex flex-col items-center transition-transform duration-100 hover:scale-105">
            <FontAwesomeIcon
              icon={faReact}
              className="w-10 h-auto"
              color="#61DAFB"
            />
            <p className=" text-sm font-semibold text-gray-800">React</p>
          </li>
          <li className="flex flex-col items-center transition-transform duration-100 hover:scale-105">
            <SiRedux className="w-10 h-auto" color="#764ABC" />
            <p className=" text-sm font-semibold text-gray-800">Redux</p>
          </li>
          <li className="flex flex-col items-center transition-transform duration-100 hover:scale-105">
            <SiNextdotjs className="w-10 h-auto" color="black" />
            <p className=" text-sm font-semibold text-gray-800">Next.js</p>
          </li>
        </ul>
      }
      up={up}
    />
  );
}
