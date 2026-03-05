import { Routes, Route, Navigate } from "react-router-dom"
import { Login, Home, Gestion, Citas, Barberos, Favoritos,Promociones} from "../pages"
import { AdminLayouts } from "../layouts"

export function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<AdminLayouts />}>
      <Route path="/home" element={<Home />} />
      <Route path="/gestion" element={<Gestion />}/> 
      <Route path ="/citas" element= {<Citas/>}/>
      <Route path ="/barberos" element= {<Barberos/>}/>
      <Route path ="/favoritos" element= {<Favoritos/>}/>
      <Route path ="/promociones" element= {<Promociones/>}/>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}  