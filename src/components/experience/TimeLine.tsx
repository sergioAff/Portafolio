"use client";
import { MapPinIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

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
          (experience, index) => (
            <motion.li
              key={experience.trabajo}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="relative group transition-transform duration-300 flex items-center justify-center w-full"
            >
              <p className="absolute hidden lg:inline-block left-5 text-xl text-black"></p>
              <div className="relative py-6 pl-8 md:pl-32">
                <h3 className="text-2xl font-semibold gradient-text group-hover:opacity-90 transition-opacity">
                  {experience.trabajo}
                </h3>
                <div className="flex flex-col md:flex-row mb-1 group-last:before:hidden before:absolute before:left-2 md:before:left-0 before:h-[110%] before:px-px before:bg-gradient-to-b before:from-orange-500 before:to-orange-tertiary before:rounded-xl md:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-1 after:absolute after:left-2 md:after:left-0 after:w-2.5 after:h-2.5 after:bg-orange-500 after:border-[3px] after:box-content after:border-orange-200 after:rounded-full md:after:ml-[6.5rem] after:translate-x-1/2 after:translate-y-1.5 after:shadow-[0_0_0_0_rgba(234,88,12,0.4)] after:animate-dot-pulse">
                  <time className="md:absolute -left-12 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold w-36 h-6 mb-2 ml-1 md:m-0 text-white bg-gradient-to-r from-orange-500 to-orange-tertiary rounded-full shadow-md">{`${experience.fechas.inicio.getMonth() + 1
                    }/${experience.fechas.inicio.getFullYear()} - ${experience.fechas.fin.getMonth() + 1
                    }/${experience.fechas.fin.getFullYear()}`}</time>
                  <div className="glass rounded-xl px-4 py-3 mx-2 md:m-2 shadow-glass hover:shadow-glass-hover transition-all duration-300 hover:-translate-y-0.5">
                    <div className="text-lg font-medium text-gray-900 md:px-1 border-b-2 border-orange-400/60 flex items-center justify-start py-1 gap-1">
                      <div className="flex flex-col items-start">
                        {experience.company && (
                          <div className="flex items-center justify-center gap-1.5">
                            <BuildingOfficeIcon className="w-5 h-auto text-orange-500/70" />
                            <Link
                              href={
                                experience.companyLink
                                  ? experience.companyLink
                                  : "#"
                              }
                              target="_blank"
                              className={clsx(
                                "hover:cursor-default font-semibold",
                                {
                                  "underline underline-offset-2 hover:text-orange-500 transition-colors duration-200 ease-out hover:cursor-pointer":
                                    experience.companyLink,
                                }
                              )}
                            >
                              {experience.company}
                            </Link>{" "}
                          </div>
                        )}

                        <div className="flex items-center justify-center gap-1.5">
                          <MapPinIcon className="w-5 h-auto text-orange-500/70" />
                          {experience.lugar}
                        </div>
                      </div>
                    </div>
                    <p className="max-w-md lg:max-w-2xl text-gray-700 md:p-1.5 leading-relaxed text-[15px]">
                      {experience.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            </motion.li>
          )
        )}{" "}
      </ul>
    </div>
  );
};
