import { useState } from "react"
import { Outlet } from "react-router-dom"
import { MenuLateralAdmin } from "../components"
import { HeaderAdmin } from "../components"

export function AdminLayoutsBarbero() {
  const [sideBar, setSideBar] = useState(false)
  const toggleSidebar = () => setSideBar(!sideBar)

  return (
    <div className="flex min-h-screen">

      {/* Menú lateral — un solo componente para todo */}
      <MenuLateralAdmin isOpen={sideBar} toggleSidebar={toggleSidebar} />

      <div className="flex-1 bg-white">
        <HeaderAdmin toggleSidebar={toggleSidebar} />
        <div className="p-4">
          <Outlet />
        </div>
      </div>

    </div>
  )
}