import Image from "next/image";
import { Links } from "../Links";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ModalDescription } from "@/components/proyectos/ModalDescription";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx";

interface PortfolioBoxProps {
  data: {
    id: number;
    nombre: string;
    link: string;
    visitar: string;
    descripcion: string;
    image: string;
    tecnologies: React.JSX.Element[];
  };
}

export const PortfolioBox = ({ data }: PortfolioBoxProps) => {
  const { nombre, link, descripcion, image, visitar } = data;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { t } = useTranslation(["proyectos"]);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <>
      {isModalOpen && (
        <ModalDescription
          title={nombre}
          description={descripcion}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <li
        className="p-4 max-w-[80dvw] sm:max-w-96 md:max-w-md 
       lg:max-w-lg hover:ring hover:ring-offset-2 transition-all duration-200 ease-in-out ring-orange-tertiary rounded-xl bg-white/40 shadow-md flex flex-col items-center gap-1 justify-between"
      >
        <h3 className="font-semibold text-2xl text-center tracking-wide text-orange-600">
          {nombre}
        </h3>
        {image && (
          <Image
            src={image}
            alt={nombre}
            width={200}
            height={200}
            className={clsx("w-full max-h-[30dvh] rounded-md  my-2", {
              "object-scale-down max-h-[50dvh]":
                nombre === "Super Hero Finder" || nombre === "IMC",
            })}
          />
        )}
        <Slider {...settings} className="flex w-full px-10">
          {data.tecnologies.map((tecnology) => (
            <div
              key={tecnology.key}
              className=" flex items-center justify-center"
            >
              {tecnology}
            </div>
          ))}
        </Slider>
        <div className="flex justify-around items-center gap-2 mt-2">
          {link && (
            <Links
              nombre="GitHub"
              direccion={link}
              estilos="text-white font-semibold rounded-md tracking-wide ring-orange-500 ring-offset-2 hover:ring-2 px-2 py-1 transition duration-150 bg-orange-500 hover:bg-orange-500/80 shadow-md"
              target="_blank"
            />
          )}
          {visitar && (
            <Links
              nombre="Visitar"
              direccion={link}
              estilos="text-white font-semibold rounded-md tracking-wide ring-orange-500 ring-offset-2 hover:ring-2 px-2 py-1 transition duration-150 bg-orange-500 hover:bg-orange-500/80 shadow-md"
              target="_blank"
            />
          )}
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-white font-semibold rounded-md tracking-wide ring-orange-500 ring-offset-2 hover:ring-2 px-2 py-1 transition duration-150 bg-orange-500 hover:bg-orange-500/80 shadow-md"
          >
            {t("Ver")}
          </button>
        </div>
      </li>
    </>
  );
};
