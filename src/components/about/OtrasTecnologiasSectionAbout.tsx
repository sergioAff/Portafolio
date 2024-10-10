import { SectionAbout3 } from "@/components/about/SectionAbout3";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGit } from "@fortawesome/free-brands-svg-icons";

interface OtrasSectionInterface {
  up: ReactNode;
}

export function OtrasTecnologías({ up }: OtrasSectionInterface) {
  const { t } = useTranslation(["about"]);
  return (
    <SectionAbout3
      title={t("tecnologias.otras")}
      body={
        <ul className="flex flex-wrap gap-6 lg:gap-8 items-center justify-center px-5 py-1">
          <li className="flex flex-col items-center transition-transform duration-100 hover:scale-105">
            <FontAwesomeIcon
              icon={faGit}
              className="w-10 h-auto"
              color="#1572B6"
            />
            <p className=" text-sm font-semibold text-gray-800">Git</p>
          </li>

          <li className="flex flex-col items-center transition-transform duration-100 hover:scale-105">
            <FontAwesomeIcon
              icon={faGithub}
              className="w-10 h-auto"
              color="#F7DF1E"
            />
            <p className=" text-sm font-semibold text-gray-800">GitHub</p>
          </li>
        </ul>
      }
      up={up}
    />
  );
}
