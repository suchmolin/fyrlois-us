import { Carousel } from "flowbite-react";
import Image from "next/image";
import "./page.css";

export default function NuestraMisionPage() {
  return (
    <div className="w-11/12 md:w-8/12 py-10 md:py-20 border-gray-400 border-b-[1px]">
      <h2 className="text-[#000b7a] text-4xl font-bold pb-5 text-center">
        Nuestra Misión
      </h2>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={7000} className="">
          <div className="flex h-full items-center justify-center bg-[#f5f7ff] ">
            <div className="w-8/12 flex flex-col items-center text-center">
              <Image
                src="/img/mision1.png"
                width={70}
                height={100}
                alt="nuestra mision"
              />
              <h4 className="text-[#000b7a] text-lg md:text-2xl py-1 md:py-5">
                Hacer realidad proyectos de vida
              </h4>
              <p className="text-gray-500 text-sm md:text-lg">
                Generar más y mejores oportunidades de crecimiento personal y
                profesional para quien está decidido a construir su proyecto de
                vida.
              </p>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-[#f5f7ff] ">
            <div className="w-8/12 flex flex-col items-center text-center">
              <Image
                src="/img/mision2.png"
                width={70}
                height={100}
                alt="nuestra mision"
              />
              <h4 className="text-[#000b7a] text-lg md:text-2xl py-1 md:py-5">
                Ofrecer un aprendizaje práctico
              </h4>
              <p className="text-gray-500 text-sm md:text-lg">
                Sólo a través de la generación de resultados generamos valor
                para nosotros mismos y nuestra comunidad.
              </p>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-[#f5f7ff] ">
            <div className="w-8/12 flex flex-col items-center text-center">
              <Image
                src="/img/mision3.png"
                width={70}
                height={100}
                alt="nuestra mision"
              />
              <h4 className="text-[#000b7a] text-lg md:text-2xl py-1 md:py-5">
                Enseñar de forma divertida
              </h4>
              <p className="text-gray-500 text-sm md:text-lg">
                Creemos en la diversión y el entretenimiento como la vía para
                integrar el aprendizaje.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
