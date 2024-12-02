import { SectionAbout3 } from "@/components/about/SectionAbout3";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGit,
  faSwift,
  faFlutter,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";

interface OtrasSectionInterface {
  up: ReactNode;
}

export function OtrasTecnologías({ up }: OtrasSectionInterface) {
  const { t } = useTranslation(["about"]);
  return (
    <SectionAbout3
      title={t("tecnologias.otras")}
      body={
        <ul className="flex flex-wrap gap-10 items-center justify-center px-5 py-1">
          <li className="flex flex-col items-center  ">
            <FontAwesomeIcon
              icon={faGit}
              className="w-10 h-auto"
              color="#F05032"
            />
            <p className="text-sm font-semibold text-gray-800">Git</p>
          </li>

          <li className="flex flex-col items-center  ">
            <FontAwesomeIcon
              icon={faGithub}
              className="w-10 h-auto"
              color="#181717"
            />
            <p className="text-sm font-semibold text-gray-800">GitHub</p>
          </li>
          <li className="flex flex-col items-center  ">
            <FontAwesomeIcon
              icon={faSwift}
              className="w-10 h-auto"
              color="#FA7343"
            />
            <p className="text-sm font-semibold text-gray-800">Swift</p>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faFlutter}
              className="w-10 h-auto"
              color="#02569B"
            />
            <p className="text-sm font-semibold text-gray-800">Flutter</p>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faDocker}
              className="w-10 h-auto"
              color="#0db7ed"
            />
            <p className="text-sm font-semibold text-gray-800">Docker</p>
          </li>
        </ul>
      }
      up={up}
    />
  );
}
