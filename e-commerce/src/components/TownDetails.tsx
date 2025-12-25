import { useParams } from "react-router-dom"
import dataButtons from "../data/DataButton"



export default function TownDetails() {
  const { id } = useParams()
  const townData = dataButtons.find(info => info.id === Number(id))
  if(!townData) 
    return <div>Pueblo No Encontrado</div>

  return (
    <>
     <div className="max-w-4xl mx-auto p-4 ">
      <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-xl shadow-sm">
        <img
          src={townData.heroImage}
          alt={townData.name}
          className="w-full h-full object-cover"
        />
        <div>
          {townData.details.geography.fullDescription}
        </div>
      </div>
     </div>
    </>
  )
}
