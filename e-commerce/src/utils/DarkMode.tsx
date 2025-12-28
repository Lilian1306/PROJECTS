import { useEffect, useState } from "react"



export default function DarkMode() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem('theme') === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )

  useEffect(() => {
    const root = window.document.documentElement
    if(isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])
  return (
    <button
        onClick={() => setIsDark(!isDark)}
    >
      {isDark ?  ' Modo Claro' : ' Modo Oscuro'}
    </button>
  )
}
