import { useNavigate } from "react-router-dom"
import {Imagen} from "../components"

export function Home() {
 const navigate = useNavigate()
  return (

<div>

    
      <div className="flex gap-3 overflow-x-auto">

        <button 
          onClick={()=> navigate("/citas")}>
          Citas
        </button>

        <button
          onClick ={() => navigate("/barberos")}>
          Barberos
        </button>

        <button
        onClick = {()=> navigate("/favoritos")}>
        
          Favoritos
        </button>

        <button
        onClick ={() => navigate("/promociones") }>
          Promociones
        </button>

      </div>
<Imagen/>
</div>
  )
}