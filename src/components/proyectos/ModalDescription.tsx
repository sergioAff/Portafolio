import { useState } from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ModalCarrusel } from "@/components/proyectos/ModalCarrusel";
import Image from "next/image";

interface ModalDescription {
  title: string;
  description: string;
  setIsModalOpen: (action: boolean) => void;
  imagesCarrusel: string[];
  tecnologies: React.JSX.Element[];
}

export const ModalDescription = ({
  title,
  description,
  setIsModalOpen,
  imagesCarrusel,
  tecnologies,
}: ModalDescription) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  function openImageModal(image: string) {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  }

  function closeImageModal() {
    setIsImageModalOpen(false);
    setSelectedImage(null);
  }

  return (
    <>
      <motion.div
        className="absolute flex flex-col gap-1 md:gap-5 lg:gap-2 inset-x-0 inset-y-auto z-50 bg-claro ring ring-orange-500 mx-auto p-3 rounded-md max-w-[340px] sm:max-w-[600px] md:max-w-[700px] 2xl:max-w-[800px] max-h-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center border-b-2 border-orange-500">
          <h3 className="text-orange-500 text-3xl 2xl:text-4xl font-semibold tracking-wide">
            {title}
          </h3>
          <button
            onClick={() => {
              setIsModalOpen(false);
            }}
            className="group"
          >
            <XMarkIcon className="w-8 text-gray-900 rounded-full transition-all duration-150 ease-in-out hover:rotate-90" />
          </button>
        </div>
        <p className="text-lg 2xl:text-2xl font-semibold text-gray-800 mb-3">
          {description}
        </p>{" "}
        <ul className="flex flex-wrap justify-evenly">
          {tecnologies.map((tecnology, index) => (
            <li
              key={index}
              className=" border border-orange-500 bg-white/30 hover:bg-white/60 rounded-full px-4 py-1.5 hover:cursor-pointer hover:scale-105 active:scale-95 transition-all duration-150 ease-in-out"
            >
              {tecnology}
            </li>
          ))}
        </ul>
        <ModalCarrusel
          imagesCarrusel={imagesCarrusel}
          onImageClick={openImageModal}
        />{" "}
      </motion.div>

      {isImageModalOpen && selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeImageModal}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeImageModal}
              className="absolute top-2 right-2 text-white"
            >
              <XMarkIcon className="w-10 text-gray-500" />
            </button>
            <Image
              src={selectedImage}
              alt="Imagen ampliada"
              width={1000}
              loading="lazy"
              height={800}
              className="max-w-[90vw] max-h-[90vh] object-contain"
            />
          </div>
        </motion.div>
      )}
    </>
  );
};
