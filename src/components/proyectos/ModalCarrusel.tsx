import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

interface ModalCarruselProps {
  imagesCarrusel: string[];
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

export const ModalCarrusel = ({ imagesCarrusel }: ModalCarruselProps) => {
  return (
    <Carousel {...carouselSettings} className="">
      {imagesCarrusel.map((image, index) => (
        <div key={index}>
          <Image
            src={image}
            alt={`Imagen ${index + 1}`}
            width={1000}
            height={0}
            className=" object-scale-down max-h-[400px] select-none"
          />
        </div>
      ))}
    </Carousel>
  );
};
