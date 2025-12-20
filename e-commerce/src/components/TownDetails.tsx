import { useParams } from "react-router-dom"
import dataButtons from "../data/DataButton"



export default function TownDetails() {
  const { id } = useParams()
  const townData = dataButtons.find(info => info.id === Number(id))
  if(!townData) 
    return <div>Pueblo No Encontrado</div>

  return (
    <>
      <div>
        <img src={townData.heroImage} className="w-full h-100"/>
      </div>
      <div >
         {townData.details.activities}
      </div>
    </>
  )
}
