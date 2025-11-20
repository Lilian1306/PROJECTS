import type React from "react";



export default function Error({children} : {children: React.ReactNode}) {
  return (
    <div className="bg-red-600 text-white text-center p-3 uppercase">
        {children}
    </div>
  )
}
