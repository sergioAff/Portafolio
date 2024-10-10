"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation("404");

  return (
    <div className="flex flex-col items-center justify-center mb-32">
      <div className="flex flex-col items-center justify-center space-y-6">
        <Image src="/404/404.png" alt="Not Found" width={400} height={200} />
        <h1 className="text-4xl font-bold text-gray-800 tracking-wide">
          {t("not-found")}
        </h1>
      </div>
      <div className="mt-8">
        <Link
          href="/"
          className="px-4 py-3 bg-orange-secondary text-white rounded-full shadow-md hover:bg-orange-tertiary transition duration-100 ease-in-out font-semibold"
        >
          {t("atras")}
        </Link>
      </div>
    </div>
  );
}
