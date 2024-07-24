import { Links } from "./Links";
import { contactos } from "@/data/contactos";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative mt-5 text-gray-700  flex flex-col w-full py-2">
      <div className=" px-5 flex flex-col gap-5 md:flex-row w-full justify-between items-center">
        <nav className=" px-5 w-1/2 z-10">
          <ul className="flex justify-center h-full gap-5 items-center w-full">
            {contactos.map((contacto) => (
              <li key={contacto.via}>
                <Links
                  direccion={contacto.direccion}
                  nombre={contacto.icon}
                  estilos="hover:text-orange-900 hover:underline"
                  target={contacto.target}
                />
              </li>
            ))}
          </ul>
        </nav>
        <ul className="md:justify-center md:items-center md:h-16 h-6 md:w-[50dvw] flex justify-start items-start">
          <li className="font-semibold text-sm sm:text-lg flex md:flex-col z-10">
            Diseño y desarrollo por
            <div className="ml-2 inline-block hover:scale-110 duration-75">
              <Links
                direccion="https://linkedin.com/in/sergio-adrian-fernández"
                nombre="Sergio Fernández"
                estilos="text-orange-800"
                target="_blank"
              />
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-5 md:mx-[10dvw] lg:mx-[20dvw] mx-10 cursor-default border-t-2 border-orange-900 items-center flex justify-center text-center">
        <h3 className="font-semibold text-sm sm:text-lg">
          &copy; {currentYear} S@ff. Todos los derechos reservados
        </h3>
      </div>
      <div className="animate-fadeBottom absolute w-full h-screen bottom-0 pointer-events-auto z-1 ">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="bg">
              <stop
                offset="0%"
                style={{ stopColor: "rgba(249, 115, 22,0.2)" }}
              ></stop>
              <stop
                offset="100%"
                style={{ stopColor: "rgba(249, 105, 80,0.2)" }}
              ></stop>
            </linearGradient>
            <path
              id="wave"
              fill="url(#bg)"
              d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
                c268.487,41.997,472.477,5.293,715.971,0c243.494-5.293,505.474,5.859,505.474,48.368
                c0,42.509,252.489,71.963,505.963,66.963v560.106H-363.852V502.589z"
            />
          </defs>
          <g>
            <use xlinkHref="#wave" opacity=".3">
              <animateTransform
                dur="10s"
                attributeName="transform"
                attributeType="XML"
                type="translate"
                calcMode="spline"
                values="270 230; -334 180; 270 230"
                keyTimes="0; 0.5; 1"
                keySplines="0.42, 0, 0.58, 1.0; 0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".6">
              <animateTransform
                dur="8s"
                attributeName="transform"
                attributeType="XML"
                type="translate"
                calcMode="spline"
                values="270 230; -334 180; 270 230"
                keyTimes="0; 0.5; 1"
                keySplines="0.42, 0, 0.58, 1.0; 0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".9">
              <animateTransform
                dur="6s"
                attributeName="transform"
                attributeType="XML"
                type="translate"
                calcMode="spline"
                values="270 230; -334 180; 270 230"
                keyTimes="0; 0.5; 1"
                keySplines="0.42, 0, 0.58, 1.0; 0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
          </g>
        </svg>
      </div>
    </footer>
  );
}
