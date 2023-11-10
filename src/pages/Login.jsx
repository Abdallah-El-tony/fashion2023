
// ** components
import { Breadcrump } from "../components"
import LoginForm from "../components/apps/LoginForm"

// ** hooks

// ** styles 
import '../style/regester.css'

const Login = () => {

  
  return (
    <div>
        <Breadcrump slug="User Login"/>
        <LoginForm/>
    </div>
  )
}

export default Login