import { Info } from "@/components/AnimateModalExperience";
import { AnimatePresence, motion } from "framer-motion";

export const Modal = ({ title, descripcion, mostrar, setIsOpen }: Info) => {
  return (
    <AnimatePresence>
      {mostrar && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm z-20"
            onClick={() => setIsOpen?.(false)}
          />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 flex items-center justify-center z-30 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative min-h-[50vh] border border-gray-700 shadow-lg bg-gradient-to-t from-orange-50 to-orange-100 p-6 rounded-lg w-[80vw] max-w-md z-40">
              <button
                onClick={() => setIsOpen?.(false)}
                className="absolute top-3 right-3 p-1.5 hover:ring-2 transition-all duration-100 ease-in text-red-800 ring-red-900 font-bold rounded-full focus:outline-none"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="w-full flex justify-between items-center border-b-2 border-orange-800 pb-2 mb-4">
                <h3 className="text-xl font-semibold text-center flex-1 text-black">
                  {title}
                </h3>
              </div>
              <div className="w-full flex-1 overflow-y-auto  text-black">
                <p className="font-semibold mb-4 ">{descripcion}</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
