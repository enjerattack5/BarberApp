import { useNavigate } from "react-router-dom"

export function Login() {
  const navigate = useNavigate()

  const entrar = () => {
    navigate("/home")
  }

  return (
    <div>
<div>
<h1>
    Login
  </h1>
  
 <button onClick={entrar}>Entrar</button>
<br/>
</div>
   
    </div>
  )
}