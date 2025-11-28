import { Outlet } from "react-router-dom";


export default function PanaLayout() {
  return (
    <>
        <header className="flex flex-row justify-between items-center w-full px-4 md:px-10 bg-sky-500 shadow-md relative z-10 py-2 min-h-[80px]">

            <div className="flex flex-col items-start gap-1">
                 <h1 className="text-2xl md:text-4xl font-bold text-white tracking-widest  drop-shadow-md static md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 ">Panajachel</h1>

                <span className="flex flex-row">Guatemala | English</span>
        
            </div>          
            <div>
              <img
                src="/logo.avif"
                className="h-28  w-auto rounded-xl shadow-2xl"
             /> 
            </div>
          
        </header>


        <section>
            <Outlet/>
        </section>
    </>
  )
}


