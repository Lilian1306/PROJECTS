

export default function Formulario() {
  return (
    <div className="">
        <h2 className="text-center mt-20">Mi nuevo Formulario</h2>

        <div className="items-center mt-10 flex flex-col  bg-purple-200 shadow-xl rounded-lg p-10 w-96 mx-auto">
        
          <label htmlFor="name" className=" text-gray-700"
          >Escriba tu nombre: </label>
          <input
           type="text"
           id="name"
           placeholder="Escribe tu nombre aqui"
           className="border border-gray-500 rounded-lg p-2 w-full"
          />

          <label htmlFor="email" className="text-gray-700 mt-5"
          >Escribe tu correo electronico:</label>
          <input
            type="email"
            id="email"
            placeholder="Escribe tu correo aqui"
            className="border border-gray-500 rounded-lg p-2 w-full"
          />

        <div>
        
          <select
             id="cards"
             className="border border-gray-500 rounded-lg w-50 mt-5"
          >
            <option className="text-center"> Fan Chant!! </option>
            <option value="" className="text-center" >Kim NamJoon</option>
            <option value="" className="text-center"  >Kim SeokJin</option>
            <option value="" className="text-center" >Min Yoongi</option>
            <option value="" className="text-center" >Jung Hoseok</option>
            <option value="" className="text-center" >Park Jimin</option>
            <option value="" className="text-center" >Kim Taeyhung</option>
            <option value="" className="text-center" >Jeon JungKook</option>
            <option value="" className="text-center" >BTS</option>
          </select>

          </div>
          
        </div>
        
    </div>
  )
}
