import Image from "next/image"
import BotonesCompraCursos from "../BotonesCompraCursos/page"

export default function TarjetaCompraCurso(props) {
  const { data } = props

  return (
    <div className="sticky top-0 right-0 h-fit overflow-hidden rounded-xl lg:p-10 shadow-2xl">
      <div
        className={`w-[300px] md:w-[350px] flex flex-col min-h-[400px]  rounded-lg  overflow-hidden transition-all duration-300 bg-white`}
      >
        <div className="relative w-full min-h-[300px]">
          <Image
            layout="fill"
            objectFit="cover"
            src={`/img/${data.img}`}
            alt={data.title || "curso a comprar"}
          />
        </div>
        <div className="mx-5 py-5">
          <p className="flex gap-2 w-10/12 md:w-7/12 py-1 text-xl font-bold items-center text-[#000b7a]">
            $ {data.price}.00 USD
          </p>
          {data.inscription && (
            <p className="text-gray-400 font-normal text-base">
              + Inscripción: $ {data.inscription}.00 USD
            </p>
          )}
          <BotonesCompraCursos id={data.id} precio={data.price} />

          <div className="w-full flex flex-col gap-5 py-5">
            <p className="flex gap-3 items-center text-[#000b7a] text-base">
              <Image
                src="/img/iconCourse1.png"
                alt="course1"
                width={30}
                height={10}
              />
              Clases en vivo
            </p>
            <p className="flex gap-3 items-center text-[#000b7a] text-base">
              <Image
                src="/img/iconCourse2.png"
                alt="course1"
                width={30}
                height={10}
              />
              Enfoque conversacional
            </p>
            <p className="flex gap-3 items-center text-[#000b7a] text-base">
              <Image
                src="/img/iconCourse3.png"
                alt="course1"
                width={30}
                height={10}
              />
              Certificado de culminación
            </p>
            <p className="flex gap-3 items-center text-[#000b7a] text-base">
              <Image
                src="/img/iconCourse4.png"
                alt="course1"
                width={30}
                height={10}
              />
              Acceso Club de Lenguaje
            </p>
            <p className="flex gap-3 items-center text-[#000b7a] text-base">
              <Image
                src="/img/iconCourse5.png"
                alt="course1"
                width={30}
                height={10}
              />
              Entra desde cualquier ordenador, tablet o móvil
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
