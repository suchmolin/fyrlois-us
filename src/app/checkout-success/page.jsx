/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useContext, useEffect } from "react"
import { OpenModalContext } from "@/context/openModal"
import Link from "next/link"
export default function Page() {
  const { setCantCart, setCartInfo } = useContext(OpenModalContext)
  useEffect(() => {
    setCantCart(0)
    setCartInfo([])
    localStorage.removeItem("cartInfo")
  }, [])
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-6/12 flex flex-col items-center py-20">
        <span className="text-6xl text-[#000b7a] py-2">🎉</span>
        <h2 className="text-3xl text-[#000b7a]">¡Gracias por tu compra!</h2>
        <h3 className="text-2xl text-[#000b7a]">
          Ha sido procesada exitosamente
        </h3>

        <p className="text-lg text-gray-500 py-2 text-center">
          En breve recibirás un email, con los detalles de tu compra y serás
          contactado para completar el proceso de inscripción.
        </p>
        <p className="text-lg text-gray-500 py-2 text-center">
          Si tienes alguna duda puedes llamarnos al
        </p>
        <p className="text-lg text-gray-500 py-2 text-center">
          +1 (786) 626-6559
        </p>
        <div className="h-[70px] flex items-center">
          <Link
            href="/"
            aria-label="Nuestros cursos"
            className="py-2 px-4 bg-[#ffa101] hover:bg-[#000b7a] hover:mb-1 rounded-md text-bold text-[#000b7a] hover:text-white transition-all duration-500"
          >
            Volver a Fyr Lois
          </Link>
        </div>
      </div>
    </div>
  )
}
