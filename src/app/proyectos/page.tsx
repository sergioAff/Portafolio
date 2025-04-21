"use client";
import { useState } from "react";
import { Proyectos } from "@/data/proyectos";
import { PortfolioBox } from "@/components/proyectos/PortfolioBox";
import { Filter } from "@/components/proyectos/Filter";

export default function Page() {
  const [selectedTecnologies, setSelectedTecnologies] = useState<string[]>([]);
  const filteredProyectos = Proyectos().filter((proyecto) =>
    selectedTecnologies.length === 0
      ? true
      : proyecto?.tecnologiesKey?.some((tecnology) =>
          selectedTecnologies.includes(tecnology ?? "")
        )
  );

  return (
    <div className="relative animate-fadeBottom-for-contacts flex flex-col md:flex-row justify-center gap-5 xl:gap-0 md:px-5 m-10 mb-64">
      <Filter onFilterChange={setSelectedTecnologies} />
      <ul className="grid gap-6 mx-auto sm:grid-cols-2 xl:gap-10">
        {filteredProyectos.map((proyecto) => (
          <PortfolioBox key={proyecto.id} data={proyecto} />
        ))}
      </ul>
    </div>
  );
}
