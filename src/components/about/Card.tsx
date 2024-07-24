import { AnimateModal } from "@/components/AnimateModal";

export const Card = ({
  title,
  descripcion,
  preview,
}: {
  title: string;
  descripcion: string;
  preview: string;
}) => {
  return (
    <div className="border border-orange-600 outline-none w-64 h-96 mx-5 transition-all duration-75 flex flex-col justify-between shadow-md shadow-orange-800 rounded-md">
      <div className="flex flex-col p-4 ">
        <h3 className="text-center text-md sm:text-xl font-semibold border-b-2 border-orange-primary pb-1">
          {title}
        </h3>
        <p className="text-black text-md font-semibold px-2">{preview}</p>
      </div>
      <div className="px-7 pb-4">
        <AnimateModal
          title={title}
          descripcion={descripcion}
          preview={preview}
        />
      </div>
    </div>
  );
};
