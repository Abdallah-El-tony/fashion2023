// ** types import
import PropTypes from "prop-types";

// ** icons import
import { ArrowRepeat, SuitHeart, Cart, Person } from "react-bootstrap-icons";

// ** styles import
import "../../style/header.css";

// ** react router impot
import { Link, useNavigate } from "react-router-dom";

// ** redux
import { useSelector, useDispatch } from "react-redux";
import { AuthActions } from "../../store/slices/authSlice";

// ** components import
import List from "./List";

const NavButton = ({ type }) => {
  // hooks
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.AuthReducer);
  const {cart} = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  const { logOut } = AuthActions;

  const gotoCart = () => {
    navigate("/cartpage");
  };

  const handleClick = () => {
    if (type == "compare") {
      navigate("/compareproducts");
    }
  };
  return (
    <>
      <li className={`center icon-button`} onClick={handleClick}>
        {type === "compare" ? (
          <ArrowRepeat size={23} className="nav-icon" />
        ) : type === "wishlist" ? (
          <>
            <SuitHeart size={22} className="nav-icon" />
            <span>0</span>
            <List type="Wishlist" />
          </>
        ) : type === "cart" ? (
          <>
            <Cart size={22} className="nav-icon" onClick={gotoCart} />
            <span>{cart.length}</span>
            <List type="Cart" cartList={cart} />
          </>
        ) : type === "user" ? (
          <>
            <Person size={26} className="nav-icon" />
            <ul className="user-account">
              {!isAuth && (
                <>
                  <li>
                    <Link to="/login">Sign In</Link>
                  </li>
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                </>
              )}
              {isAuth && (
                <li onClick={() => dispatch(logOut())}>
                  <Link>Log Out</Link>
                </li>
              )}
            </ul>
          </>
        ) : (
          ""
        )}
      </li>
    </>
  );
};
NavButton.propTypes = {
  type: PropTypes.string.isRequired,
};
export default NavButton;
