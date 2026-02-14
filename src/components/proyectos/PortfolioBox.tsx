import Image from "next/image";
import { Links } from "../Links";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ModalDescription } from "@/components/proyectos/ModalDescription";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx";
import { motion } from "framer-motion";

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
  index: number;
}

export const PortfolioBox = ({ data, index }: PortfolioBoxProps) => {
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

  const isMobileApp =
    nombre === "Buscador de Héroes" ||
    nombre === "IMC" ||
    nombre === "Super Hero Finder" ||
    nombre === "BMI" ||
    nombre === "Mindful" ||
    nombre === "Gym" ||
    nombre === "GitHub Finder";

  function handleModal() {
    setIsModalOpen(true);
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  }

  return (
    <>
      {isModalOpen && (
        <ModalDescription
          title={nombre}
          description={descripcion}
          setIsModalOpen={setIsModalOpen}
          imagesCarrusel={imagesCarrusel}
          tecnologies={data.tecnologies}
        />
      )}
      <motion.li
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={clsx(
          "group p-4 max-w-[80dvw] sm:max-w-96 md:max-w-md lg:max-w-lg glass rounded-2xl shadow-glass hover:shadow-glass-hover hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col items-center gap-2 justify-between",
          {
            "md:max-h-[500px] lg:max-h-[600px]": image,
            "md:max-h-[990px] lg:max-h-[765px]": isMobileApp,
          }
        )}
      >
        <h3 className="font-semibold text-2xl text-center tracking-wider gradient-text select-none">
          {nombre}
        </h3>
        {image ? (
          <div className="overflow-hidden rounded-xl w-full">
            <Image
              src={image}
              alt={nombre}
              width={200}
              height={200}
              loading="lazy"
              className={clsx(
                "w-full rounded-xl my-1 transition-transform duration-500 group-hover:scale-[1.03]",
                {
                  "lg:max-h-[600px] object-scale-down": isMobileApp,
                }
              )}
            />
          </div>
        ) : (
          <p className="font-semibold p-2 text-gray-700">{descripcion}</p>
        )}
        <Slider {...settings} className="flex w-full px-2">
          {data.tecnologies.map((tecnology) => (
            <div
              key={tecnology.key}
              className="flex items-center justify-center"
            >
              {tecnology}
            </div>
          ))}
        </Slider>
        <div className="flex justify-around items-center gap-3 mt-1">
          {link && (
            <Links
              nombre="GitHub"
              direccion={link}
              estilos="shimmer text-white font-semibold rounded-xl tracking-wide px-3 py-1.5 transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-tertiary hover:shadow-orange-glow hover:scale-105 active:scale-95"
              target="_blank"
            />
          )}
          {visitar && (
            <Links
              nombre="Visitar"
              direccion={visitar}
              estilos="shimmer text-white font-semibold rounded-xl tracking-wide px-3 py-1.5 transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-tertiary hover:shadow-orange-glow hover:scale-105 active:scale-95"
              target="_blank"
            />
          )}
          {imagesCarrusel.length > 0 && (
            <button
              onClick={() => handleModal()}
              className="shimmer text-white font-semibold rounded-xl tracking-wide px-3 py-1.5 transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-tertiary hover:shadow-orange-glow hover:scale-105 active:scale-95"
            >
              {t("Ver")}
            </button>
          )}
        </div>
      </motion.li>
    </>
  );
};
