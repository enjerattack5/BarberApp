import {Routes, Route} from "react-router"
import {Home,Gestion} from "../pages"
import { AdminLayouts } from "../layouts"

function Rutas() {
  const LoadedLayout=(Layout, Page)=>{
    return(
      <Layout>
        <Page/>
      </Layout>
    )
  }
  return (  
      <Routes>
        <Route path="/home" element={LoadedLayout(AdminLayouts,Home)}/>
        <Route path="/gestion" element={LoadedLayout(AdminLayouts,Gestion)}/>
    </Routes>

  )
}

export default Rutas
//