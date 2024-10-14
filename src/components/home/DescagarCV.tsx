import { useTranslation } from "react-i18next";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const DescargarCv = () => {
  const { t } = useTranslation("home");
  return (
    <button className="animate-fadeBottomForCV mt-6 px-2 py-1 rounded-lg hover:bg-transparent hover:ring-2 hover:outline-none hover:ring-orange-500 dark:hover:ring-orange-night shadow-lg dark:shadow-md dark:shadow-orange-night/50 text-base shadow-orange-600/50 transition-all ease-in duration-75 hover:bg-orange-50 hover:text-gray-700 active:scale-95 font-semibold bg-orange-500 dark:bg-orange-night/95 text-gray-100 dark:hover:bg-orange-night/10">
      <Link
        download={"CV Sergio Fernández.pdf"}
        className="flex gap-1 items-center justify-center dark:hover:text-orange-100/90"
        rel="noopener noreferrer"
        href={
          "https://drive.google.com/uc?export=download&id=1-JXYgTQ8tPT8VqkQtwP1u6c3SDTnPUst"
        }
        target="_blank"
      >
        {t("Descargar")} CV
        <span>
          <DocumentArrowDownIcon className="w-6" />
        </span>
      </Link>
    </button>
  );
};
