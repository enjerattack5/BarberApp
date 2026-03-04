import React from 'react'
import { Perfil } from '../../components'

export function Home() {
const tocar ="tocar"
  return (
    <div>
      <h2>Home</h2>
      <Perfil/>
      <button class= "bg-violet 500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ...">
  Tocar</button>
    </div>
  )
}

{/* <button onClick={Text} className=' bg-blue 500 text-black rounded-full p-3 font-semibold'></button> */}