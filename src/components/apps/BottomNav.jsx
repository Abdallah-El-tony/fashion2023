//** icons import
import { ArrowRepeat, SuitHeart, Cart, Person } from "react-bootstrap-icons";

// ** styles
import "../../style/header.css";

import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="container">
        <div className="buttom-nav d-block d-lg-none position-relative">
      <ul>
        <li>
          <Link to="/cart">
            <span>
              <Cart size={20}/>
            </span>
            <span>Cart</span>
          </Link>
        </li>
        <li>
          <Link to="compare">
            <span>
              <ArrowRepeat size={20}/>
            </span>
            <span>Compare</span>
          </Link>
        </li>
        <li>
          <Link to="/wishlist">
            <span>
              <SuitHeart size={20}/>
            </span>
            <span>Wishlist</span>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <span>
              <Person size={20}/>
            </span>
            <span>Login</span>
          </Link>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default BottomNav;
