import { MapPinIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import clsx from "clsx";

export const TimeLine = ({
  experiencias,
}: {
  experiencias: Array<{
    trabajo: string;
    fechas: {
      inicio: Date;
      fin: Date;
    };
    lugar: string;
    company: string;
    companyLink: string;
    descripcion: string;
  }>;
}) => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <ul className="w-full mx-auto flex flex-col items-center justify-center">
        {experiencias.map(
          (experience: {
            trabajo: string;
            fechas: {
              inicio: Date;
              fin: Date;
            };
            lugar: string;
            company: string;
            companyLink: string;
            descripcion: string;
          }) => (
            <li
              key={experience.trabajo}
              className="realtive group transition-transform duration-300 flex items-center justify-center w-full"
            >
              <p className="absolute hidden lg:inline-block left-5 text-xl text-black"></p>
              <div className="relative py-6 pl-8 md:pl-32">
                <h3 className="text-2xl 2xl:text-3xl font-semibold text-orange-700 group-hover:text-orange-500 transition-colors">
                  {experience.trabajo}
                </h3>
                <div className="flex flex-col md:flex-row mb-1 group-last:before:hidden before:absolute before:left-2 md:before:left-0 before:h-[110%] before:px-px before:bg-orange-600 before:rounded-xl md:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-1 after:absolute after:left-2 md:after:left-0 after:w-2 after:h-2 after:bg-transparent after:border-4 after:box-content after:border-orange-600 after:rounded-full md:after:ml-[6.5rem] after:translate-x-1/2 after:translate-y-1.5">
                  <time className="md:absolute -left-12 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold w-36 h-6 mb-2 ml-1 md:m-0 text-orange-900 bg-orange-300 rounded-full shadow-md">{`${
                    experience.fechas.inicio.getMonth() + 1
                  }/${experience.fechas.inicio.getFullYear()} - ${
                    experience.fechas.fin.getMonth() + 1
                  }/${experience.fechas.fin.getFullYear()}`}</time>
                  <div className="bg-white/30 rounded-lg px-3 py-2 mx-2 md:m-2 shadow-lg">
                    <div className="text-lg font-medium text-gray-900 md:px-1 border-b-2 border-orange-500 flex items-center justify-start py-1 gap-1">
                      <div className="flex flex-col items-start">
                        {experience.company && (
                          <div className="flex items-center justify-center gap-1">
                            <BuildingOfficeIcon className="w-6 h-auto text-gray-500" />
                            <Link
                              href={
                                experience.companyLink
                                  ? experience.companyLink
                                  : "#"
                              }
                              target="_blank"
                              className={clsx(
                                " hover:cursor-default font-semibold",
                                {
                                  "underline underline-offset-2 hover:text-orange-500 transition-colors duration-150 ease-in-out":
                                    experience.companyLink,
                                }
                              )}
                            >
                              {experience.company}
                            </Link>{" "}
                          </div>
                        )}

                        <div className="flex items-center justify-center gap-1">
                          {" "}
                          <span>
                            <MapPinIcon className="w-6 h-auto text-gray-500" />
                          </span>{" "}
                          {experience.lugar}
                        </div>
                      </div>
                    </div>
                    <p className="max-w-md lg:max-w-2xl 2xl:max-w-3xl text-lg 2xl:text-xl text-gray-700 md:p-1 leading-relaxed">
                      {experience.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          )
        )}{" "}
      </ul>
    </div>
  );
};
