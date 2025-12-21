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
          <img src={townData.heroImage} alt={townData.name} className="w-full h-100"/>
        </div>
        
      </div>
      <div>
        <h2 className="text-xl font-bold mt-4">Actividades</h2>
        <ul className="list-disc ml-5">
          {townData.details.activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
