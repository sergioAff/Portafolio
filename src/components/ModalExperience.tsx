import { Info } from "@/components/AnimateModalExperience";
import { AnimatePresence, motion } from "framer-motion";

export const Modal = ({
  title,
  descripcion,
  mostrar,
  setIsOpen,
  lugar,
  duracion,
}: Info) => {
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
                <h3 className="text-xl font-semibold flex-1 text-black">
                  {title}
                </h3>
              </div>
              <div className="w-full flex-1 overflow-y-auto text-black">
                <div className="flex flex-col gap-2 font-semibold text-gray-700">
                  <p className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    <span className="font-normal">{lugar}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      />
                    </svg>
                    <span className="font-normal">{duracion}</span>
                  </p>
                </div>
                <div className="flex-1 overflow-y-auto mt-2 text-gray-800">
                  <p className="font-semibold sm:pt-5">{descripcion}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
