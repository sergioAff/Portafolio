"use client";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import Loading from "@/app/loading";

export default function Page() {
  const { t, i18n } = useTranslation(["welcome"]);

  return (
    <Suspense fallback={<Loading />}>
      <main className="flex items-center justify-center h-auto">
        <div className="flex flex-col h-auto w-4/5 sm:w-3/5 lg:w-2/5 items-start justify-center p-10">
          <hgroup className="w-full ">
            <h1 className="text-6xl sm:text-8xl font-semibold text-gray-800 antialiased animate-fadeIn">
              {t("Hola")}
            </h1>
            <h3 className="mt-4 text-2xl sm:text-3xl text-gray-600 animate-fadeRight ">
              {t("Soy")}{" "}
              <strong className="text-orange-500">Sergio Fernández.</strong>
            </h3>
            <p className="mt-2 text-lg sm:text-xl text-gray-500 animate-fadeBottom">
              {t("profesion")}
            </p>
          </hgroup>
        </div>
      </main>
    </Suspense>
  );
}
