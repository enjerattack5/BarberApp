
import { BrowserRouter} from "react-router";
import  Routes  from "./routes/Routes";
import {Perfil} from "./components/forms/imagenes"

 
function App(){
  return(  
        <div>
      <BrowserRouter>
      <Routes/>
      </BrowserRouter>
        </div>
  );
}

export default App;                               
