import { testdata } from "@/testdata"
import { useState } from "react"

export default function QuestionsTest(props) {
  const { position, setPosition, answer, setAnswer } = props
  const [next, setNext] = useState(false)
  const [previo, setPrevio] = useState(false)
  const [isSelected, setIsSelected] = useState(false)
  const item = testdata[position]

  const handlePosition = (type) => {
    setIsSelected(false)
    const boton = document.getElementById(type)
    boton.disabled = true

    if (type === "next") {
      const selected = document.querySelector("input:checked")
      if (!selected) {
        setIsSelected(true)
      } else {
        setNext(true)

        updateAnswer(selected.value)
        selected.checked = false

        setTimeout(() => {
          setNext(false)
          setPosition((prev) => prev + 1)
        }, 500)
      }
    } else {
      setPrevio(true)
      setTimeout(() => {
        setPrevio(false)
        setPosition((prev) => prev - 1)
      }, 500)
    }

    boton.disabled = false
  }

  const updateAnswer = (selectedAnswer) => {
    const index = answer.findIndex((ans) => ans.id === item.id)

    if (index >= 0) {
      const array = [...answer]
      array[index] = { ...answer[index], resp: selectedAnswer }
      setAnswer(array)
    } else {
      const array = [...answer]

      array.push({ id: item.id, resp: selectedAnswer, ok: item.ok })
      setAnswer(array)
    }
  }

  const handleFinal = () => {
    setIsSelected(false)
    const selected = document.querySelector("input:checked")
    if (!selected) {
      setIsSelected(true)
      return
    } else {
    }
  }

  return (
    <div
      id="personalBox"
      className={`h-full pl-10 py-5 transition-all duration-700 ${next ? "ml-[1500px]" : ""} ${previo ? "-ml-[1500px]" : ""}`}
    >
      <p className="text-lg text-gray-500 mb-4">{`${item.id}) ${item.question}`}</p>

      {item.options.map((option, index) => (
        <div key={index} className="flex items-ceter py-2 px-2">
          <input
            id={`default-radio-${index}`}
            type="radio"
            value={option}
            name="default-radio"
            className="w-4 h-4 text-[#000b7a] bg-gray-100 border-gray-300 focus:ring-[#000b7a] focus:ring-2 hover:cursor-pointer"
          />
          <label
            htmlFor={`default-radio-${index}`}
            className="ms-2 text-sm font-medium text-gray-900  hover:cursor-pointer"
          >
            {option}
          </label>
        </div>
      ))}
      <div>
        {position !== 0 && (
          <button
            id="prev"
            disabled={previo}
            onClick={() => handlePosition("prev")}
            className="absolute left-5 bottom-7 py-2 px-4 rounded-xl bg-[#90d400] text-[#000b7a] transition-all duration-300 disabled:opacity-20 disabled:cursor-wait"
          >
            Anterior
          </button>
        )}
        {isSelected && (
          <p className="text-red-500 text-center">
            Debe seleccionar una respuesta para avanzar.
          </p>
        )}
        {position !== testdata.length - 1 && (
          <button
            id="next"
            disabled={next}
            onClick={() => handlePosition("next")}
            className="absolute right-5 bottom-7 py-2 px-4 rounded-xl bg-[#000b7a] text-white transition-all duration-300 disabled:opacity-20 disabled:cursor-wait"
          >
            Siguiente
          </button>
        )}
        {position === testdata.length - 1 && (
          <button
            id="finalizar"
            onClick={handleFinal}
            className="absolute right-5 bottom-7 py-2 px-4 rounded-xl bg-[#000b7a] text-white transition-all duration-300 disabled:opacity-20 disabled:cursor-wait"
          >
            Finalizar
          </button>
        )}
      </div>
    </div>
  )
}
