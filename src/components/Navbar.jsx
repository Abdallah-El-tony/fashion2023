// ** styles import
import '../style/header.css'

// ** react router import
import { Link } from "react-router-dom";

// ** images import
import logo from "../assets/logo.png";

// ** data import
import { NavLinks } from "../constants";

// ** components import
import NavButton from './apps/NavBtns';
import NavSearch from './apps/NavSearch';
import BottomNav from './apps/BottomNav';


const Navbar = () => {
  return (
    <header className="py-3">
      <nav className="navbar navbar-expand-lg bg-white pb-0">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" width={60} height={60} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex gap-2">
              {NavLinks.map((link) => (
                <li className="nav-item" key={link.link}>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={link.url.toLocaleLowerCase()}
                  >
                    {link.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="nav-icons d-none d-lg-flex gap-3 m-0">
            <NavSearch/>
            <NavButton type='compare'/>
            <NavButton type='wishlist'/>
            <NavButton type='cart'/>
            <NavButton type='user'/>
            
          </ul>
        </div>
      </nav>
      <BottomNav/>
    </header>
  );
};

export default Navbar;
