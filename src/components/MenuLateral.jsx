import { useNavigate } from "react-router-dom"
import {Home,Settings,CalendarClock,HeartPlus,Users,Tag} from "lucide-react"
import { NavLink } from "react-router-dom"

export function MenuLateral(isOpen,toggleSidebar) {
 /*
 const menuItems = [
    { name: "Home", path: "/home", icon: <Home size={20}/> },
    { name: "Citas", path: "/citas" },
    { name: "Barberos", path: "/barberos" },
    { name: "Favoritos", path: "/favoritos" },
    { name: "Promociones", path: "/promociones" },
    { name: "Gestión", path: "/gestion", icon: <Settings size={20}/> }
  ]
*/

  const navigate = useNavigate()

  return (

    
    <div className="w-64 bg-black text-white p-6 space-y-4">

      <h2 className="text-xl font-bold mb-6">
        BarberApp 💈
      </h2>

      <button onClick={() => navigate("/home")} className="block w-full text-left hover:text-gray-400">
        <Home size={20}/> Home
        
      </button>

      <button onClick={() => navigate("/citas")} className="block w-full text-left hover:text-gray-400">
        <CalendarClock size={20}/> Citas
      </button>

      <button onClick={() => navigate("/barberos")} className="block w-full text-left hover:text-gray-400">
        <Users size={20}/> Barberos
      </button>

      <button onClick={() => navigate("/favoritos")} className="block w-full text-left hover:text-gray-400">
        <HeartPlus size={20}/> Favoritos
      </button>

      <button onClick={() => navigate("/promociones")} className="block w-full text-left hover:text-gray-400">
        <Tag size={20}/> Promociones
      </button>

    </div>
  )
}