

export type CardProps = {
    name: string, 
    country: string, 
    cards:  string
}

export default function Card({name, country, cards} : CardProps) {
  return (
    <div>
     <div>{name}</div>
      <div>{country}</div>
      <div>{cards}</div>
    </div>
  )
}
