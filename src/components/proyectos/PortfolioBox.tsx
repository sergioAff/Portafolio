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
    imagesCarrusel: string[];
    image: string;
    tecnologies: React.JSX.Element[];
  };
}

export const PortfolioBox = ({ data }: PortfolioBoxProps) => {
  const { nombre, link, descripcion, image, visitar, imagesCarrusel } = data;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { t } = useTranslation(["proyectos"]);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
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
          imagesCarrusel={imagesCarrusel}
        />
      )}
      <li
        className={clsx(
          "p-3 max-w-[80dvw] sm:max-w-96 md:max-w-md lg:max-w-lg hover:ring hover:ring-offset-2 transition-all duration-200 ease-in-out ring-orange-tertiary rounded-xl bg-white/30 shadow-md flex flex-col items-center gap-1 justify-between",
          {
            "md:max-h-[500px] lg:max-h-[600px]": image,
            "md:max-h-[990px] lg:max-h-[765px]":
              nombre === "Buscador de Héroes" ||
              nombre === "IMC" ||
              nombre === "Super Hero Finder",
          }
        )}
      >
        <h3 className="font-semibold text-2xl text-center tracking-wider text-orange-600 select-none">
          {nombre}
        </h3>
        {image ? (
          <Image
            src={image}
            alt={nombre}
            width={200}
            height={200}
            className={clsx("w-full rounded-md my-1", {
              "lg:max-h-[600px] object-scale-down":
                nombre === "IMC" ||
                nombre === "Super Hero Finder" ||
                nombre === "Buscador de Héroes",
            })}
          />
        ) : (
          <p className="font-semibold p-2">{descripcion}</p>
        )}
        <Slider {...settings} className="flex w-full px-2">
          {data.tecnologies.map((tecnology) => (
            <div
              key={tecnology.key}
              className=" flex items-center justify-center"
            >
              {tecnology}
            </div>
          ))}
        </Slider>
        <div className="flex justify-around items-center gap-2 mt-1">
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
              direccion={visitar}
              estilos="text-white font-semibold rounded-md tracking-wide ring-orange-500 ring-offset-2 hover:ring-2 px-2 py-1 transition duration-150 bg-orange-500 hover:bg-orange-500/80 shadow-md"
              target="_blank"
            />
          )}
          {imagesCarrusel.length > 0 && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-white font-semibold rounded-md tracking-wide ring-orange-500 ring-offset-2 hover:ring-2 px-2 py-1 transition duration-150 bg-orange-500 hover:bg-orange-500/80 shadow-md"
            >
              {t("Ver")}
            </button>
          )}
        </div>
      </li>
    </>
  );
};
