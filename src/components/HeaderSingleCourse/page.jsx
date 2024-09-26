"use client"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import TarjetaCompraCurso from "../TarjetaCompraCurso/page"

export default function HeaderSingleCourse(props) {
  const { data } = props
  return (
    <div className="w-full min-h-[600px] flex flex-col md:flex-row gap-20 justify-center lg:justify-start items-center bg-gray-100 px-7 pb-10 lg:pl-48">
      <Fade triggerOnce className="w-11/12 lg:w-6/12 pt-10 md:pt-0">
        <div className="text-center md:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#000b7a] leading-tight text-center lg:text-left">
            {data.title}
          </h1>
          <p className="text-lg text-gray-500 py-10">
            {`${data.description} $${data.price}.00`} + Inscripción: $
            {data.inscription}.00
          </p>
          <div className="flex w-full flex-col items-center gap-4 pb-20">
            <div className="flex gap-4 w-10/12 md:w-8/12 lg:w-full">
              <p className="flex flex-col sm:flex-row items-center gap-2 h-[70px] sm:h-[25px] w-[230px] text-gray-500 ">
                <Image
                  src="/img/course1.png"
                  alt="course1"
                  width={23}
                  height={10}
                />
                Sesiones en tiempo real
              </p>
              <p className="flex flex-col sm:flex-row items-center gap-2 h-[70px] sm:h-[25px] w-[230px] text-gray-500 ">
                <Image
                  src="/img/course2.png"
                  alt="course2"
                  width={23}
                  height={10}
                />
                Clases 100% en inglés
              </p>
            </div>
            <div className="flex gap-4  w-10/12 md:w-8/12 lg:w-full mt-8 md:mt-0">
              <p className="flex flex-col sm:flex-row items-center gap-2 h-[70px] sm:h-[25px] w-[230px] text-gray-500">
                <Image
                  src="/img/course3.png"
                  alt="course3"
                  width={23}
                  height={10}
                />
                Actividades adaptadas a la edad y nivel
              </p>
              <p className="flex flex-col sm:flex-row items-center gap-2 h-[70px] sm:h-[25px] w-[230px] text-gray-500 ">
                <Image
                  src="/img/course4.png"
                  alt="course4"
                  width={23}
                  height={10}
                />
                48 horas por nivel
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-center lg:justify-start">
            <div className="relative w-[70px] h-[70px] rounded-full overflow-hidden">
              <Image
                src="/img/teacher1.png"
                layout="fill"
                objectFit="cover"
                alt="teacher1"
              />
            </div>
            <div>
              <h2 className="text-xl text-[#000b7a] font-bold">Jesús Prato</h2>
              <h3 className="text-lg text-[#90d400]">
                VICEPRESIDENTE ACADÉMICO
              </h3>
            </div>
          </div>
        </div>
      </Fade>

      <Fade
        triggerOnce
        className="hidden lg:block mt-36 h-[1600px]  absolute top-0 right-10"
      >
        <div className="relative h-full">
          <TarjetaCompraCurso data={data} />
        </div>
      </Fade>
    </div>
  )
}
