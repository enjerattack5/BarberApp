import { useNavigate } from "react-router-dom"

export function MenuLateral() {
  const navigate = useNavigate()

  return (
    <div className="w-64 bg-black text-white p-6 space-y-4">

      <h2 className="text-xl font-bold mb-6">
        BarberApp 💈
      </h2>

      <button onClick={() => navigate("/home")} className="block w-full text-left hover:text-gray-400">
        Home
      </button>

      <button onClick={() => navigate("/citas")} className="block w-full text-left hover:text-gray-400">
        Citas
      </button>

      <button onClick={() => navigate("/barberos")} className="block w-full text-left hover:text-gray-400">
        Barberos
      </button>

      <button onClick={() => navigate("/favoritos")} className="block w-full text-left hover:text-gray-400">
        Favoritos
      </button>

      <button onClick={() => navigate("/promociones")} className="block w-full text-left hover:text-gray-400">
        Promociones
      </button>

    </div>
  )
}