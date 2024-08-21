"use client"

import PersonalDataTest from "@/components/PersonalDataTest/page"
import QuestionsTest from "@/components/QuestionsTest/page"
import { testdata } from "@/testdata"
import { useEffect, useState } from "react"

export default function Test() {
  const initialData = {
    email: "",
    name: "",
    city: "",
    birthday: "",
    phone: "",
  }
  const [answer, setAnswer] = useState([])
  const [position, setPosition] = useState(58)
  const [personal, setPersonal] = useState(initialData)

  return (
    <div className="w-full flex flex-col items-center py-10 min-h-screen">
      <h1 className="text-2xl font-bold text-[#000b7a] text center">
        Conoce tu nivel de inglés con nosotros
      </h1>
      <p className="text-lg text-gray-500 text center">
        Recuerda responder el examen de acuerdo con tus conocimientos, para que
        puedas conocer los resultados reales de tu nivel de inglés.
      </p>
      <div className="w-6/12 h-[400px] relative rounded-md border shadow-xl my-10 p-7 overflow-hidden">
        <h4 className="text-lg text-[#000b7a] text center">
          Answer the following questions.
        </h4>
        {personal.email === "" && (
          <PersonalDataTest setPersonal={setPersonal} />
        )}
        {personal.email !== "" && (
          <QuestionsTest
            position={position}
            setPosition={setPosition}
            answer={answer}
            setAnswer={setAnswer}
          />
        )}
      </div>
      <p>
        Pregunta {position + 1} de {testdata.length}
      </p>
    </div>
  )
}
