export function formatearFecha(fecha: Date): string {
  const opciones: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
  };
  return fecha.toLocaleDateString("es-ES", opciones);
}
