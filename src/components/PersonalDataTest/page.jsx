import { useState } from "react"

export default function PersonalDataTest({ setPersonal }) {
  const [submited, setSubmited] = useState(false)
  const inputClass =
    "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#000b7a] peer"
  const labelClass =
    "absolute text-sm text-gray-500 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#000b7a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.targer)
    const data = {}
    formData.forEach((value, key) => {
      data[key] = value
    })
    setSubmited(true)

    setTimeout(() => {
      setPersonal(data)
    }, 1000)
  }

  return (
    <div
      id="personalBox"
      className={`h-full px-3 py-5 transition-all duration-700 ${submited ? "ml-[1500px]" : ""}`}
    >
      <form
        onSubmit={(e) => handleSubmit(e)}
        action=""
        className="relative h-full flex gap-x-10 flex-wrap"
      >
        <div className="relative z-0 w-[300px]">
          <input
            required
            type="email"
            id="email"
            className={inputClass}
            placeholder=" "
          />
          <label htmlFor="email" className={labelClass}>
            Correo Electrónico
          </label>
        </div>
        <div className="relative z-0 w-[300px]">
          <input
            required
            type="text"
            id="name"
            className={inputClass}
            placeholder=" "
          />
          <label htmlFor="name" className={labelClass}>
            Nombre y Apellido
          </label>
        </div>
        <div className="relative z-0 w-[300px]">
          <input
            required
            type="text"
            id="city"
            className={inputClass}
            placeholder=" "
          />
          <label htmlFor="city" className={labelClass}>
            Ciudad de Residencia
          </label>
        </div>
        <div className="relative z-0 w-[300px]">
          <input
            required
            type="date"
            id="date"
            className={inputClass}
            placeholder=" "
          />
          <label htmlFor="date" className={labelClass}>
            Fecha de Nacimiento
          </label>
        </div>
        <div className="relative z-0 w-[300px]">
          <input
            required
            type="number"
            id="city"
            className={inputClass}
            placeholder=" "
          />
          <label htmlFor="city" className={labelClass}>
            Número Telefónico
          </label>
        </div>
        <button
          className=" absolute right-5 bottom-3 py-2 px-4 rounded-xl bg-[#000b7a] text-white hover:bg-[#90d400] hover:text-[#000b7a] transition-all duration-300"
          type="submit"
        >
          Comenzar
        </button>
      </form>
    </div>
  )
}
