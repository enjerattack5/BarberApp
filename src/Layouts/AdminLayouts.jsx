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
/*import { useState } from "react";


export function AdminLayouts({ children }) {
  const [sideBar, setsideBar] = useState(false);

  const toggleSidebar = () => setsideBar(!sideBar);

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden text-slate-900">
      <MenuLateral isOpen={sideBar} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header userName="Dany" toggleSidebar={toggleSidebar}/>
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}*/