

export type CardProps = {
    name: string, 
    country: string, 
    cards:  string,
    image: string
}

export default function Card({name, country, cards, image} : CardProps) {
  return (
    <div className="items-center flex flex-col bg-purple-300 w-96 mx-auto p-10 rounded-xl shadow-2xl h-96">
     <div className="p-4 w-full text-left font-bold text-2xl text-purple-900">{name}</div>
      <img
        src={image}
        alt={cards}
        className="w-20 h-30"
      />
      <p className="text-purple-900 font-bold text-2xl text-right p-4 w-full mt-auto">{country}</p>
    
    </div>
  )
}
