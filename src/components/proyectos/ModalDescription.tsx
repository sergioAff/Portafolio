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
}

export const ModalDescription = ({
  title,
  description,
  setIsModalOpen,
  imagesCarrusel,
}: ModalDescription) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Estado de carga para la imagen

  function openImageModal(image: string) {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  }

  function closeImageModal() {
    setIsImageModalOpen(false);
    setSelectedImage(null);
    setIsLoading(true); // Reiniciar el estado de carga al cerrar el modal
  }

  return (
    <>
      <motion.div
        className="absolute flex flex-col gap-1 md:gap-5 lg:gap-2 inset-x-0 inset-y-auto z-50 bg-claro ring ring-orange-500 mx-auto p-3 rounded-md max-w-[340px] sm:max-w-[600px] md:max-w-[700px] max-h-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center border-b-2 border-orange-500">
          <h3 className="text-orange-500 text-3xl font-semibold tracking-wide">
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
        <p className="text-lg font-semibold text-gray-800 mb-1">
          {description}
        </p>

        <ModalCarrusel
          imagesCarrusel={imagesCarrusel}
          onImageClick={openImageModal}
        />
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
            {/* Contenedor para manejar el estado de carga de la imagen */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black rounded-md">
                <span className="loader"></span>{" "}
                {/* Aquí puedes usar tu loader preferido */}
              </div>
            )}
            <Image
              src={selectedImage}
              alt="Imagen ampliada"
              width={1000}
              loading="lazy"
              height={800}
              className={`max-w-[90vw] max-h-[90vh] object-contain transition-opacity duration-300 ${
                isLoading ? "invisible" : "visible"
              }`}
              onLoadingComplete={() => setIsLoading(false)} // Cambia el estado al cargar la imagen
            />
          </div>
        </motion.div>
      )}
    </>
  );
};
