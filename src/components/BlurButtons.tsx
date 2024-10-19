import clsx from "clsx";

export const BlurButtons = ({ proyect }: { proyect: boolean }) => {
  return (
    <div
      className={clsx(
        "absolute -top-2 left-1 w-[100%] h-3.5 bg-white/70  blur-md",

        { "max-w-20": proyect }
      )}
    ></div>
  );
};
