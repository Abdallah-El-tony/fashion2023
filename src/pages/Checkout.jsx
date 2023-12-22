import { Breadcrump } from "../components";
import { ExclamationCircle} from "react-bootstrap-icons";
import SelectBox from "../components/apps/CustomSelect";
import OrderSummery from "../components/apps/OrderSummery";
import { Link } from "react-router-dom";
import { useState } from "react";
// ** styles
import '../style/cart.css'
import { useSelector } from "react-redux";
const Checkout = () => {
  const [open,setOpen] = useState(false)
  const handleClick = ()=>{
    setOpen(!open)
  }

  const {cart} = useSelector(state=>state.Cart)
  return (
    <div>
      <div className="container">
        <Breadcrump slug="Checkout" />
        {cart?.length > 0 ? <div className="checkout">
          <div className="row">
            <div className="col-lg-8 overflow-hidden">
              <h6 className="m-0 d-flex align-items-center">
                <span className="me-2 mb-1 d-inline-block primary-text-color">
                  <ExclamationCircle />
                </span>
                <p>
                  Returning Customer?
                  <button className="border-0 bg-transparent fs-6 primary-text-color" onClick={handleClick}>
                    Click here to login
                  </button>
                </p>
              </h6>
             {open?<> <div className={`login bg-white p-5 border border-1 mt-4 col-lg-7 animate__animated animate__fadeInDown`}>
                <h3>Sign In</h3>
                <form action="">
                  <label htmlFor="username">
                    Email or Username <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    id="username"
                    placeholder="Type Email or Username"
                    name="username"
                  />

                  <label htmlFor="password">
                    Password <span>*</span>
                  </label>
                  <input
                    type="password"
                    className="form-input"
                    id="password"
                    placeholder="Type Your Password"
                    name="password"
                  />
                  <div className="my-3">
                    <div>
                      <input type="checkbox" name="isRemeber" id="remember" />
                      <label htmlFor="remember" className="mt-2 ms-2">
                        Remember Me
                      </label>
                    </div>
                    <div style={{display:'flex' , justifyContent:'space-between'}}>
                      <p><Link to='/signup'>Create New Account ?</Link></p>
                      <p><Link to='/forgetpassword'>Forget Password</Link></p>
                      
                    </div>
                  </div>
                  <button className="filledBtn w-100 text-center mb-3">
                    Login
                  </button>
                </form>
                <div>
                </div>
              </div></>:''}
              <div className="billing_details mt-4">
                <h3>Billing Details</h3>
                <form action="">
                  <label htmlFor="name" className="mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control py-3"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                  />
                  <div className="row justify-content-between">
                    <div className="col-md-6">
                      <label htmlFor="number" className="mt-4 mb-2">
                        Mobile Number
                      </label>
                      <input
                        type="text"
                        className="form-control py-3"
                        id="number"
                        name="number"
                        placeholder="Your mobile number"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="mt-4 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        className="form-control py-3"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <label htmlFor="message" className="mt-4 mb-2">
                        Country
                      </label>
                      <SelectBox />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="message" className="mt-4 mb-2">
                        State
                      </label>
                      <SelectBox />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="message" className="mt-4 mb-2">
                        City/Town
                      </label>
                      <SelectBox />
                    </div>
                  </div>
                  <label htmlFor="message" className="mt-4 mb-2">
                    Address
                  </label>
                  <textarea
                    name="message"
                    className="form-control mb-2"
                    id="message"
                    cols="30"
                    rows="5"
                    placeholder="Type Address"
                  ></textarea>
                  <label htmlFor="message" className="mt-4 mb-2">
                    Order Notes
                  </label>
                  <textarea
                    name="message"
                    className="form-control mb-2"
                    id="message"
                    cols="30"
                    rows="5"
                    placeholder="Type  Order Notes"
                  ></textarea>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <OrderSummery />
            </div>
          </div>
        </div>:<h2 className="text-center mt-5 pt-5">Ther is No any Item to Buy</h2>}
      </div>
    </div>
  );
};

export default Checkout;
