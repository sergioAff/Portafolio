import { useTranslation } from "react-i18next";

export const Experiencia = () => {
  const { t } = useTranslation(["experiencias"]);
  return [
    {
      trabajo: t("experiencia.1.title"),
      descripcion: t("experiencias.1.description"),
      lugar: t("experiencias.1.place"),
      preview: t("experiencias.1.preview"),
      imagen: "/Experience/freelancer.jpg",
      fechas: {
        inicio: new Date(2023, 8),
        fin: new Date(2024, 8),
      },
    },
    {
      trabajo: t("experiencias.2.title"),
      descripcion:
        "Responsable del desarrollo y administración de bases de datos para la gestión eficiente de recursos materiales, humanos y logísticos en la Empresa Eléctrica de Cienfuegos. Implementación de soluciones que optimizan el rendimiento y la seguridad de las bases de datos, contribuyendo a una mejor toma de decisiones organizacionales.",
      lugar: "Empresa Eléctrica de Cienfuegos, Cuba",
      preview:
        "Desarrollo y administración de bases de datos robustas y seguras...",
      imagen: "/Experience/sql.jpg",
      fechas: {
        inicio: new Date(2023, 9),
        fin: new Date(2024, 6),
      },
    },
    {
      trabajo: "Líder de Desarrollo",
      descripcion:
        "Liderazgo de un proyecto enfocado en el análisis de datos e identificación de indicadores clave para el sector turístico en Cuba. Coordinación de un equipo multidisciplinario para desarrollar herramientas analíticas que apoyen en la toma de decisiones estratégicas.",
      lugar: "Universidad de Cienfuegos",
      preview:
        "Liderazgo en un proyecto de análisis de datos e indicadores clave para el turismo...",
      imagen: "/Experience/lider.jpg",
      fechas: {
        inicio: new Date(2023, 6),
        fin: new Date(2024, 0),
      },
    },
    {
      trabajo: "Programador Jr. Python",
      descripcion:
        "Desarrollo de software como Programador Junior en Python en Merchise Austrement, contribuyendo con la implementación de funcionalidades mediante buenas prácticas de programación.",
      lugar: "Remoto",
      preview:
        "Desarrollo de software y colaboración en proyectos en Python...",
      imagen: "/Experience/python.jpg",
      fechas: {
        inicio: new Date(2024, 1),
        fin: new Date(2024, 4),
      },
    },
    {
      trabajo: "Full Stack Developer",
      descripcion:
        "Creación y desarrollo de una aplicación web integral como Programador Full Stack y liderazgo de proyectos en 'Clínica Fernández'. Implementación de soluciones tanto en el frontend como en el backend, asegurando la funcionalidad y la experiencia de usuario óptima.",
      lugar: "Remoto",
      preview:
        "Creación y desarrollo de una aplicación web integral como Programador Full Stack y ...",
      imagen: "/Experience/full.jpg",
      fechas: {
        inicio: new Date(2024, 5),
        fin: new Date(2024, 10),
      },
    },
  ];
};
