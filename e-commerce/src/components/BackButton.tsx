import { useNavigate } from "react-router-dom"
import { TiArrowBack } from "react-icons/ti";

export default function BackButton() {
    const navigate = useNavigate()

  return (
    <button
        onClick={() => navigate(-1)}
        className="text-3xl items-center"
    >
        <TiArrowBack/>
        <span>Regresar</span>
    </button>
  )
}
 