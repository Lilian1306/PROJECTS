


export default function MainPage() {
  return (
    <>
      <div className="mt-30">
        <form className="items-center flex flex-col bg-sky-500 shadow rounded-lg p-3 w-96 mx-auto font-bold text-white "> 
          <div className="mb-5">What is the weather like today? </div>

        <select 
            id="country"
            className="border border-gray-200 rounded-lg w-60  mt-5 p-2 text-black">
          <option>Selecciona tu pais: </option>
        </select>
        </form>

     
      </div>
    </>
  )
}