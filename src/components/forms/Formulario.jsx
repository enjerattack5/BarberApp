import React from 'react'


export function Formulario({variable,Saludar,barbero}) {
  return (
    <div>
      <h3>Nombre:{variable}</h3>
      <h3>Barbero:{barbero}</h3>
      <button onClick={Saludar} className=' bg-blue-500 rounded-full p-3'>Saludar</button>
    </div>
  )
}

