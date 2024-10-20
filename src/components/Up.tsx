import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export const Up = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Manejar el evento de scroll
  useEffect(() => {
    const handleScroll = () => {
      // Mostrar el botón si se ha hecho scroll hacia abajo más de 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Añadir el listener al evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Eliminar el listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Función para manejar el clic y hacer scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Añadir una animación suave
    });
  };

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 transition-all duration-150 ease-in-out active:scale-95 cursor-pointer"
        >
          <ArrowUpIcon className="w-6 h-6 text-white" />
        </div>
      )}
    </>
  );
};
