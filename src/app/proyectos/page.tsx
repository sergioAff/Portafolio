"use client";
import { Proyectos } from "@/data/proyectos";
import { PortfolioBox } from "@/components/proyectos/PortfolioBox";
import { Filter } from "@/components/proyectos/Filter";

export default function Page() {
  const proyectos = Proyectos();
  return (
    <div className="realtive animate-fadeBottom-for-contacts flex flex-col md:flex-row justify-center gap-5 xl:gap-0 px-10 md:px-5 mt-10 mb-24">
      <Filter />
      <ul className=" grid gap-6 mx-auto sm:grid-cols-2 xl:gap-10">
        {proyectos.map((proyecto) => (
          <PortfolioBox key={proyecto.id} data={proyecto} />
        ))}
      </ul>
    </div>
  );
}
