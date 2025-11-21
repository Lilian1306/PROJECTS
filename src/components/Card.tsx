

export type CardProps = {
    name: string, 
    country: string, 
    cards:  string,
    image: string
}

export default function Card({name, country, cards, image} : CardProps) {
  return (
    <> 
    <div className="flex flex-col items-center justify-between bg-purple-700 w-[400px] h-[600px] mx-auto shadow-xl/30 p-10">
     <div className=" w-full text-left font-bold text-2xl text-white italic">{name}</div>
     <div className="flex-1 w-full flex items-center justify-center overflow-hidden my-4">
        <img
        src={image}
        alt={cards}
        className="max-w-full max-h-full object-contain rounded-lg shadow-md"
      />

     </div>
      <p className="text-white font-bold text-2xl text-right w-full mt-auto italic">{country}</p>
    </div>
    </>
  )
}
