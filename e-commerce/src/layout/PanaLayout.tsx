import { Outlet } from "react-router-dom";


export default function PanaLayout() {
  return (
    <>
        <header className="flex flex-row justify-between items-center h-30 px-30 border-gray-200 bg-sky-500 top-0 z-10">
            <div className="flex flex-row gap-4 items-center text-white text-sm font-medium text-gray-900  cursor-pointer">
                <span className="text-xl"></span>
                <span>Guatemala</span>
                <span className="text-white">|</span>
                <span>English</span>
            </div>   

            <div className="absolute left-1/2 transform -translate-x-1/2">
              <h1 className="text-center text-2xl text-white">Panajachel</h1>
            </div>   

            <img
              src="/logo.avif"
              className="h-20 w-30 rounded-xl shadow-4xl"
            /> 
        </header>


        <section>
            <Outlet/>
        </section>
    </>
  )
}


