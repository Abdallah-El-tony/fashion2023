// ** types import
import PropTypes from "prop-types";

// ** icons import
import {
  ArrowRepeat,
  SuitHeart,
  Cart,
  Person,
} from "react-bootstrap-icons";

// ** styles import
import "../../style/header.css";

// ** react router impot
import { Link } from "react-router-dom";

// ** components import
import List from "./List";

const NavButton = ({ type }) => {

  return (
    <>
    <li className={`center icon-button`}>
      {type === "compare" ? (
        <ArrowRepeat size={23} className="nav-icon"/>
      ) : type === "wishlist" ? (
        <>
        <SuitHeart size={22} className="nav-icon"/>
        <span>0</span>
        <List type="Wishlist"/>
        </>
      ) : type === "cart" ? (
        <>
        <Cart size={22} className="nav-icon"/>
        <span>0</span>
        <List type="Cart"/>
        </>
      ) : type === "user" ? (
        <>
        <Person size={26} className="nav-icon"/>
        <ul className="user-account">
          <li>
            <Link to='/login'>Sign In</Link>
          </li>
          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>
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
