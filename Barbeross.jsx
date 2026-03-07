import React from 'react'

export  function Barbeross({nombre,imagen}) {
  return (
    
    <div className="flex flex-col items-center">
  <h3 className="mt-8 text-2xl font-bold">Barberos</h3>

  <div className="flex gap-10 overflow-x-auto mt-6">

    <div className="flex flex-col items-center">
      <img
        className="h-24 w-24 rounded-full object-cover"
        src={imagen}
        alt="Barberos"
      />

      <h3 className="mt-2 text-lg font-semibold text-center">
        {nombre}
      </h3>

      <button className="mt-2 px-4 py-2 rounded-lg border border-purple-200 hover:bg-green-600 hover:text-white transition">
        Whatsapp
      </button>
    </div>
  </div>
</div>
  )
}
