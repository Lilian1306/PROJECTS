import { useParams } from "react-router-dom"
import dataButtons from "../data/DataButton"
import BackButton from "./BackButton"



export default function TownDetails() {
  const { id } = useParams()
  const townData = dataButtons.find(info => info.id === Number(id))
  if(!townData) 
    return <div className="text-center py-10 dark:text-white">Pueblo No Encontrado</div>

  return (
    <>
     <div className="max-w-4xl mx-auto p-4 transition-colors duration-500">
      
      <h1 className="text-3xl font-bold mt-1 mb-3 text-center text-slate-900 dark:text-white">{townData.name}</h1>
      <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-xl shadow-sm border dark:border-slate-800">
        <img
          src={townData.heroImage}
          alt={townData.name}
          className="w-full h-full object-cover"
        />
        </div>
        <div className="text-black text-base mt-3">
         <p>{townData.fullDescription}</p>
        </div>

        <div className="border-t pt-6">
          <h2 className="text-xl font-bold">Actividades</h2>
          <ul className="list-disc ml-5 mt-2 space-y-2">
            {townData.details.activities.map((activity, index) => (
              <li
                key={index}
                className="flex items-start"
              >
                <span className="h-2 w-2 rounded-full bg-black mt-2 mr-3 flex-shrink-0 mb-3"></span>
                <span className="text-gray-700">{activity}</span>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-6 border-t border-b border-gray-100  mb-6 ">
            <div>
              <h3 className="text-xl font-bold">Ubicacion</h3>
                <p className="text-gray-800">{townData.details.geography.location}</p>
                <p className="text-xm text-gray-800">{townData.details.geography.department}</p>
            </div>

            {townData.details.geography.climate && (
              <div>
                <h3 className="text-xl font-bold">Clima</h3>
                <p>{townData.details.geography.climate}</p>
              </div>
            )}

            {townData.details.demographics?.population && (
              <div>
                <h3 className="text-xl font-bold">Poblacion</h3>
                <p>{townData.details.demographics.population}</p>
              </div>
            )}
          </div>
        </div>  

              <BackButton/>
     </div>
    </>
  )
}
 