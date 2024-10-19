import { SectionAbout3 } from "@/components/about/SectionAbout3";
import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

interface FrontendSectionInterface {
  up: ReactNode;
}

export function FrontendSection({ up }: FrontendSectionInterface) {
  return (
    <SectionAbout3
      title={"Frontend"}
      body={
        <ul className="flex flex-wrap gap-6 lg:gap-8 items-end justify-around px-5 py-1">
          <li className="flex flex-col items-center ">
            <FontAwesomeIcon
              icon={faHtml5}
              className="w-10 h-auto"
              color="#E34F26"
            />
            <p className=" text-sm font-semibold text-gray-800">HTML</p>
          </li>
          <li className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faCss3Alt}
              className="w-10 h-auto"
              color="#1572B6"
            />
            <p className=" text-sm font-semibold text-gray-800">CSS</p>
          </li>
          <li className="flex flex-col items-center  ">
            <SiTailwindcss className="w-10 h-auto" color="#06B6D4" />
            <p className=" text-sm font-semibold text-gray-800">TailwindCSS</p>
          </li>
          <li className="flex flex-col items-center  ">
            <FontAwesomeIcon
              icon={faJsSquare}
              className="w-10 h-auto"
              color="#F7DF1E"
            />
            <p className=" text-sm font-semibold text-gray-800">JavaScript</p>
          </li>
          <li className="flex flex-col items-center ">
            <SiTypescript className="w-10 h-auto" color="#007ACC" />
            <p className=" text-sm font-semibold text-gray-800">TypeScript</p>
          </li>
          <li className="flex flex-col items-center ">
            <FontAwesomeIcon
              icon={faReact}
              className="w-10 h-auto"
              color="#61DAFB"
            />
            <p className=" text-sm font-semibold text-gray-800">React</p>
          </li>
          <li className="flex flex-col items-center ">
            <SiNextdotjs className="w-10 h-auto" color="black" />
            <p className=" text-sm font-semibold text-gray-800">Next.js</p>
          </li>
        </ul>
      }
      up={up}
    />
  );
}
