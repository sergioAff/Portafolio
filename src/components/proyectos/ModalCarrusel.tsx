import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

interface ModalCarruselProps {
  imagesCarrusel: string[];
  onImageClick: (image: string) => void;
}

const carouselSettings = {
  showArrows: false,
  showStatus: false,
  showIndicators: true,
  infiniteLoop: true,
  autoPlay: true,
  interval: 5000,
  stopOnHover: false,
  swipeable: true,
  dynamicHeight: true,
  emulateTouch: true,
};

export const ModalCarrusel = ({
  imagesCarrusel,
  onImageClick,
}: ModalCarruselProps) => {
  return (
    <Carousel {...carouselSettings} className="relative">
      {imagesCarrusel.map((image, index) => (
        <div
          key={index}
          className="cursor-pointer bg-black/60 rounded-md"
          onClick={() => onImageClick(image)}
        >
          <Image
            src={image}
            alt={`Imagen ${index + 1}`}
            width={1000}
            height={0}
            className="object-scale-down p-1 rounded-md max-h-[400px] select-none cursor-pointer"
          />
        </div>
      ))}
    </Carousel>
  );
};
