

export type CardProps = {
    name: string, 
    country: string, 
    cards:  string,
    image: string
}

export default function Card({name, country, cards, image} : CardProps) {
  return (
    <div className="flex flex-col items-center justify-between bg-purple-300 w-[400px] h-[600px] mx-auto shadow-2xl p-10">
     <div className=" w-full text-left font-bold text-2xl text-purple-900">{name}</div>
     <div className="flex-1 w-full flex items-center justify-cebter overflow-hidden my-4">
        <img
        src={image}
        alt={cards}
        className="max-w-auto max-h-auto object-contain rounded-lg shadow-md"
      />

     </div>
      <p className="text-purple-900 font-bold text-2xl text-right w-full mt-auto">{country}</p>
    
    </div>
  )
}
