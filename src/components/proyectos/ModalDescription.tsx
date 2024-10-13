import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ModalDescription {
  title: string;
  description: string;
  setIsModalOpen: (action: boolean) => void;
}

export const ModalDescription = ({
  title,
  description,
  setIsModalOpen,
}: ModalDescription) => {
  return (
    <motion.div
      className="absolute self-start flex flex-col gap-3 inset-0 z-50 bg-claro ring ring-orange-500 w-[80dvw] md:w-[70dvw] lg:w-[50dvw] mx-auto px-3 py-4 rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className=" flex justify-between items-center ">
        <h3 className=" text-orange-500 text-3xl font-semibold tracking-wide">
          {title}
        </h3>
        <button
          onClick={() => {
            setIsModalOpen(false);
          }}
          className="group "
        >
          <XMarkIcon className="w-8 text-gray-900 hover:bg-gray-100 rounded-full hover:ring-2 ring-offset-2 transition-all duration-150 ease-in-out ring-orange-400/50 hover:ring-orange-400 hover:rotate-90" />
        </button>
      </div>
      <p className=" text-lg font-semibold text-gray-800">{description}</p>
    </motion.div>
  );
};
