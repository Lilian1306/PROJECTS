import { Outlet } from "react-router-dom";


export default function EcommerceLayout() {
  return (
    <>
        <header className="bg-gray-300 py-5">
        </header>
          <div className="bg-white py-8">

            </div>

        <section>
            <Outlet/>
        </section>
    </>
  )
}
