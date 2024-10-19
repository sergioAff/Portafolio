import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ModalCarrusel } from "@/components/proyectos/ModalCarrusel";

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
  return (
    <motion.div
      className="fixed self-start mt-10 flex flex-col gap-1 md:gap-5 lg:gap-2 inset-0 z-50 bg-claro ring ring-orange-500 mx-auto p-3 rounded-md max-w-[340px] sm:max-w-[600px] md:max-w-[700px] max-h-auto "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className=" flex justify-between items-center border-b-2 border-orange-500">
        <h3 className=" text-orange-500 text-3xl font-semibold tracking-wide">
          {title}
        </h3>
        <button
          onClick={() => {
            setIsModalOpen(false);
          }}
          className="group "
        >
          <XMarkIcon className="w-8 text-gray-900 rounded-full transition-all duration-150 ease-in-out hover:rotate-90" />
        </button>
      </div>
      <p className=" text-lg font-semibold text-gray-800 mb-1">{description}</p>

      <ModalCarrusel imagesCarrusel={imagesCarrusel} />
    </motion.div>
  );
};
