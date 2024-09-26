import { cursosInfo } from "@/cursosInfo"
import Image from "next/image"

export default function CursosBox(props) {
  const { box } = props
  return (
    <div
      className={`w-full flex gap-6 justify-center lg:justify-start flex-wrap ${box === "lg" ? "lg:flex-nowrap" : ""}`}
    >
      {cursosInfo.map((curso, index) => (
        <a
          key={index}
          href={`/courses/${curso.id}`}
          className={`flex flex-col justify-between min-h-[400px]  rounded-lg shadow-2xl overflow-hidden hover:scale-[0.98] transition-all duration-300 ${box === "lg" ? "w-11/12 sm:w-8/12 md:w-5/12 lg:w-3/12" : "w-full sm:w-8/12 md:w-5/12"}`}
        >
          <div className="relative w-full min-h-[300px]">
            <Image
              layout="fill"
              objectFit="cover"
              src={`/img/${curso.img}`}
              alt={curso.title || "curso" + index}
            />
          </div>
          <div className="mx-5 py-3 ">
            <h4 className="text-xl font-bold text-[#000b7a] py-2">
              {curso.title}
            </h4>
            <p className="text-gray-500 pb-6">{curso.description}</p>
          </div>
          <div className="mx-4 py-5 text-xl text-[#000b7a] font-bold border-t-[1px] border-gray-500 flex flex-col gap-">
            <p>$ {curso.price}.00 USD</p>
            {curso.inscription && (
              <p className="text-gray-400 font-normal text-base">
                + Inscripción: $ {curso.inscription}.00 USD
              </p>
            )}
          </div>
        </a>
      ))}
    </div>
  )
}
