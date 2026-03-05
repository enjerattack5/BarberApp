import { Outlet } from "react-router-dom"
import { MenuLateral } from "../components"

export function AdminLayouts() {
  return (
    <div className="flex min-h-screen">

      <MenuLateral />

      <div className="flex-1 bg-gray-100 p-4">
        <Outlet />
      </div>

    </div>
  )
}