// ** styles
import { Link } from "react-router-dom";
import "../../style/regester.css";
const LoginForm = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            <h3>Sign In</h3>
            <form action="">
              <label htmlFor="username">Email or Username <span>*</span></label>
              <input
                type="text"
                className="form-input"
                id="username"
                placeholder="Type Email or Username"
                name='username'
              />

              <label htmlFor="password">Password <span>*</span></label>
              <input
                type="password"
                className="form-input"
                id="password"
                placeholder="Type Your Password"
                name="password"
              />
              <div className="d-flex justify-content-between align-items-center my-3">
                <div>
                    <input type="checkbox" name="isRemeber" id="remember"/>
                    <label htmlFor="remember" className="mt-2 ms-2">Remember Me</label>
                </div>
                <div>
                    <Link to='/' className="text-dark">Forget Password?</Link>
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
