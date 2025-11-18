import React, { useState } from "react"
import Card from "./Card"
import { Member } from "../data/data"



export default function Formulario() {

  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [cards, setCards] = useState('')
  const [enviar, setEnviar] = useState<any>(null)

   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault()
     const memberFound = Member.find((m) => m.name === cards)

    

     setEnviar({name, country, cards, image: memberFound ? memberFound?.image : ""})
  }

  return (
    <div className=" mt-20">
        {!enviar ? (    
        <form 
          className="items-center mt-10 flex flex-col bg-purple-200 shadow-xl rounded-lg p-10 w-96 mx-auto"
          onSubmit={handleSubmit}
        >
        
          <label htmlFor="name" className=" text-gray-700"
          >Escriba tu nombre: </label>
          <input
           type="text"
           id="name"
           placeholder="Escribe tu nombre aqui"
           className="border border-gray-500 rounded-lg p-2 w-full"
           value={name}
           onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="country" className="text-gray-700 mt-5"
          >Escribe tu ciudad:</label>
          <input
            type="text"
            id="country"
            placeholder="Escribe tu ciudad aqui"
            className="border border-gray-500 rounded-lg p-2 w-full"
            value={country} 
            onChange={(e) => setCountry(e.target.value)}
          />

        <div>
        
          <select
             id="cards"
             className="border border-gray-500 rounded-lg w-50 mt-5 p-2"
             value={cards}
             onChange={(e) => setCards(e.target.value)}
          >
            <option value='Fan Chant!!' className="text-center"> Fan Chant!! </option>
            <option value="Kim Namjoon" className="text-center" >Kim NamJoon</option>
            <option value="Kim SeokJin" className="text-center"  >Kim SeokJin</option>
            <option value="Min Yoongi" className="text-center" >Min Yoongi</option>
            <option value="Jung Hoseok" className="text-center" >Jung Hoseok</option>
            <option value="Park Jimin" className="text-center" >Park Jimin</option>
            <option value="Kim Taehyung" className="text-center" >Kim Taeyhung</option>
            <option value="Jeon Jungkook" className="text-center" >Jeon JungKook</option>
            <option value="BTS" className="text-center" >BTS</option>
          </select>

          </div>
          <button
            type="submit"
            className="mt-5 rounded rounded-xl w-full cursor-pointer p-2 bg-purple-400 text-purple-900 font-bold shadow-xl"
          >Enviar</button>
        </form>
  
        ) : (
        <Card
          name={enviar.name}
          country={enviar.country}
          cards={enviar.cards}
          image={enviar.image}
        />
         )  } 

    </div>
  )
}
