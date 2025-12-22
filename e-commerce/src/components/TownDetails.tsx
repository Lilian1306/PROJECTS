import { useParams } from "react-router-dom"
import dataButtons from "../data/DataButton"



export default function TownDetails() {
  const { id } = useParams()
  const townData = dataButtons.find(info => info.id === Number(id))
  if(!townData) 
    return <div>Pueblo No Encontrado</div>

  return (
    <>
      <div className="max-w-4xl mx-auto p-4">
        <div>
          <img 
            src={townData.heroImage} 
            alt={townData.name} 
            className="w-full h-full object-cover"/>

            <div className="absolute bottom-0 left-0 bg-liner-to-t from-black/70 p-6 w-full">
              <h1 className="text-black texl-3xl font-bold">{townData.name}</h1>
            </div>
        </div>

        
      </div>
      
    </>
  )
}
