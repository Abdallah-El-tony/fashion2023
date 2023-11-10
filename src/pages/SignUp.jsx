/* eslint-disable react-hooks/exhaustive-deps */
// ** Components
import { Link, useNavigate } from "react-router-dom";
import { Breadcrump } from "../components";

// ** styles
import "../style/regester.css";

// ** bootstrap Icons
import { Eye, EyeSlash } from "react-bootstrap-icons";

// ** react imports
import { useEffect, useState } from "react";
import PhoneNumberInput from "../components/apps/CustomPhoneInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../data/schema";
import SelectBox from "../components/apps/CustomSelect";

const initialData = {
  name: "",
  email: "",
  username: "",
  password: "",
  confirmpassword: "",
  country: "",
  city: "",
  phone: "",
};

const SignUp = () => {
  // Hooks
  const navigate = useNavigate();

  // states
  const [viewPs, setViewPs] = useState(false);
  const [viewCps, setViewCps] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const [phoneNumber, SetPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [isSubmitted,setIsSubmitted] = useState(false)

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ** functions
  const togglePassword = (type) => {
    if (type === "ps") {
      setViewPs(!viewPs);
    } else {
      setViewCps(!viewCps);
    }
  };

  useEffect(() => {
    setFormData({ ...formData, phone: phoneNumber, country });
  }, [country, phoneNumber]);

  const submitHandler = () => {
    console.log(formData)
    delete formData.confirmpassword;
    navigate("/");
  };

  const clickHandler = ()=>{
    setIsSubmitted(true)
  }

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });
  return (
    <div>
      <Breadcrump slug="User Regester" />
      <div className="signup-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <h3 className="h3">Sign Up</h3>
              <form
                className="form-controle"
                onSubmit={handleSubmit(submitHandler)}
              >
                <label htmlFor="name">
                  Name <span>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  placeholder="Type Your Full Name"
                  className="form-input"
                  name="name"
                  onChange={onChange}
                  value={formData.name}
                />
                {errors.name ? (
                  <span className="text-danger">{errors.name.message}</span>
                ) : (
                  <></>
                )}
                <br />

                <label htmlFor="username">
                  Username <span>*</span>
                </label>
                <input
                  type="text"
                  id="username"
                  {...register("username")}
                  placeholder="Type Your Username"
                  className="form-input"
                  name="username"
                  value={formData.username}
                  onChange={onChange}
                />
                {errors.username ? (
                  <span className="text-danger">{errors.username.message}</span>
                ) : (
                  <></>
                )}
                <br />

                <label htmlFor="email">
                  Email Adress <span>*</span>
                </label>
                <input
                  type="text"
                  id="email"
                  {...register("email")}
                  placeholder="Type Your Email Adress"
                  className="form-input"
                  name="email"
                  onChange={onChange}
                  value={formData.email}
                />
                {errors.email ? (
                  <span className="text-danger">{errors.email.message}</span>
                ) : (
                  <></>
                )}
                <br />

                <label htmlFor="phone">
                  Phone Number <span>*</span>
                </label>
                <PhoneNumberInput
                  SetPhoneNumber={SetPhoneNumber}
                  isSubmitted={isSubmitted}
                />
                <label htmlFor="country">
                  Country <span>*</span>
                </label>
                <SelectBox setCountry={setCountry} isSubmitted={isSubmitted}/>

                <label htmlFor="city">
                  City <span>*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  {...register("city")}
                  placeholder="Type Your City"
                  className="form-input"
                  name="city"
                  onChange={onChange}
                  value={formData.city}
                />
                {errors.city ? (
                  <span className="text-danger">{errors.city.message}</span>
                ) : (
                  <></>
                )}
                <br />

                <div className="row">
                  <div className="col-12 col-lg-6 position-relative">
                    <label htmlFor="password">
                      Password
                      <span>*</span>
                    </label>
                    <input
                      type={`${viewPs ? "text" : "password"}`}
                      id="password"
                      {...register("password")}
                      placeholder="Password"
                      className="form-input"
                      name="password"
                      value={formData.password}
                      onChange={onChange}
                    />
                    {errors.password ? (
                      <span className="text-danger">
                        {errors.password.message}
                      </span>
                    ) : (
                      <></>
                    )}
                    <br />

                    <div className="eye" onClick={() => togglePassword("ps")}>
                      {viewPs ? <Eye /> : <EyeSlash />}
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 position-relative">
                    <label htmlFor="confirmpassword">
                      Confirm Password
                      <span>*</span>
                    </label>
                    <input
                      type={viewCps ? "text" : "password"}
                      id="confirmpassword"
                      {...register("confirmpassword")}
                      placeholder="Confirm Password"
                      className="form-input"
                      name="confirmpassword"
                      value={formData.confirmpassword}
                      onChange={onChange}
                    />
                    {errors.confirmpassword ? (
                      <span className="text-danger">
                        {errors.confirmpassword.message}
                      </span>
                    ) : (
                      <></>
                    )}
                    <br />

                    <div className="eye" onClick={() => togglePassword("cps")}>
                      {viewCps ? <Eye /> : <EyeSlash />}
                    </div>
                  </div>
                </div>

                <button className="filledBtn mt-3" type="submit" onClick={clickHandler}>
                  Sign Up
                </button>
              </form>

              <p className="mt-3">
                Already have an Account?{" "}
                <Link to="/login">
                  <b>Sign In</b>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
