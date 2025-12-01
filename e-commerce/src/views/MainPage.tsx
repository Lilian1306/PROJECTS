import dataButtons from "../data/DataButton";


export default function MainPage() {
  return (
    <div className="relative w-full mx-auto  mt-6">
      <img
        src="/Panajachel.png"
        alt="Mapa del lago de Atitlan"
        className="w-full h-auto object-cover"
      />

      {dataButtons.map((pueblo) => (
        <button
          key={pueblo.id}
          style={{top: pueblo.top, left: pueblo.left}}
          className="absolute w-[10%] h-[6%] hover:bg-white/30 cursor-pointer rounded rounded-xl"
        ></button>
      ))}
    </div>
  )
}

// Comentario