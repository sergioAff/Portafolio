import { SectionAbout3 } from "@/components/about/SectionAbout3";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGit } from "@fortawesome/free-brands-svg-icons";
import { SiDocker, SiAmazonwebservices } from "react-icons/si"; // Importa los íconos de Docker y AWS

interface OtrasSectionInterface {
  up: ReactNode;
}

export function OtrasTecnologías({ up }: OtrasSectionInterface) {
  const { t } = useTranslation(["about"]);
  return (
    <SectionAbout3
      title={t("tecnologias.otras")}
      body={
        <ul className="flex flex-wrap gap-6 lg:gap-8 items-center justify-around px-5 py-1">
          <li className="flex flex-col items-center transition-transform duration-100 hover:scale-105">
            <FontAwesomeIcon
              icon={faGit}
              className="w-10 h-auto"
              color="#F05032"
            />
            <p className="text-sm font-semibold text-gray-800">Git</p>
          </li>

          <li className="flex flex-col items-center transition-transform duration-100 hover:scale-105">
            <FontAwesomeIcon
              icon={faGithub}
              className="w-10 h-auto"
              color="#181717"
            />
            <p className="text-sm font-semibold text-gray-800">GitHub</p>
          </li>

          <li className="flex flex-col items-center transition-transform duration-100 hover:scale-105">
            <SiDocker className="w-10 h-auto" color="#2496ED" />{" "}
            {/* Docker icon */}
            <p className="text-sm font-semibold text-gray-800">Docker</p>
          </li>

          <li className="flex flex-col items-center transition-transform duration-100 hover:scale-105">
            <SiAmazonwebservices className="w-10 h-auto" color="#FF9900" />{" "}
            {/* AWS icon */}
            <p className="text-sm font-semibold text-gray-800">AWS</p>
          </li>
        </ul>
      }
      up={up}
    />
  );
}
