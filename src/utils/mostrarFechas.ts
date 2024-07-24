import { formatearFecha } from "@/utils/formatearFecha";

export function mostrarFechas(desde?: Date, hasta?: Date | "Actual"): string {
  if (!desde) return ""; // Si 'desde' es undefined, retornar una cadena vacía
  const fechaInicio = formatearFecha(desde);
  const fechaFin =
    hasta === "Actual" ? "Actual" : hasta ? formatearFecha(hasta) : "";
  return `${fechaInicio}-${fechaFin}`;
}
