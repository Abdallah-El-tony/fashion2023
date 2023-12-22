/* eslint-disable react-hooks/exhaustive-deps */
// ** react link
import { Link, useNavigate } from "react-router-dom";

// ** redux
import { useDispatch } from "react-redux";
import { AuthActions } from "../../store/slices/authSlice";

// ** styles
import "../../style/regester.css";

// axios import
import axios from "axios";
import { useEffect, useState } from "react";

const LoginForm = () => {
  // ** hooks
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {signIn} = AuthActions

  const [users,setUsers] = useState([])
  const [found,setFound] = useState(true)
  const [userData,setUserData] = useState({
    username:'',
    password:''
  })

  const changeHandler = (e)=>{
    setUserData({...userData,[e.target.name]:e.target.value})
  }

  useEffect(()=>{
    const fetchUsers =async ()=>{
      const response = await axios.get('http://localhost:5000/api/users')
      setUsers(response.data)
    }
    fetchUsers()
  },[])

  const handleSubmit = (e)=>{
    e.preventDefault()
    const user = users.find(User=>(User.username === userData.username || User.email === userData.username) && User.password === userData.password)
    if(user) {
      setFound(true)
      dispatch(signIn(user.id))
      navigate('/')
    }else {
      setFound(false)
    }
  }
  
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            <h3>Sign In</h3>
            <div className={`alert alert-danger mt-4 ${found?'d-none':'d-block'}`}>User name and password do not match</div>
            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="username">Email or Username <span>*</span></label>
              <input
                type="text"
                className="form-input"
                id="username"
                placeholder="Type Email or Username"
                name='username'
                value={userData.username}
                onChange={changeHandler}
              />

              <label htmlFor="password">Password <span>*</span></label>
              <input
                type="password"
                className="form-input"
                id="password"
                placeholder="Type Your Password"
                name="password"
                value={userData.password}
                onChange={changeHandler}
              />
              <div className="d-flex justify-content-between align-items-center my-3">
                <div>
                    <input type="checkbox" name="isRemeber" id="remember"/>
                    <label htmlFor="remember" className="mt-2 ms-2">Remember Me</label>
                </div>
                <div>
                    <Link to='/forgetpassword' className="text-dark">Forget Password?</Link>
                </div>
              </div>
              <button className="filledBtn w-100 text-center mb-3">Login</button>
            </form>
            <div>
                <p>Do not have an account? <Link to='/signup' className="fw-bold">Sign up</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
