// ** icons
import { Facebook, Twitter, Instagram, Youtube} from "react-bootstrap-icons";

// ** logo
import logo from "../assets/logo.png";

// ** style
import "../style/footer.css";

// ** react link
import { Link } from "react-router-dom";

// ** data
import { NavLinks } from "../constants";
const Footer = () => {
  return (
    <div className="footer mt-4">
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="text-center">
                <h4 className="mb-3">Follow</h4>
                <div className="social-icons d-flex gap-3 align-items-center justify-content-center">
                  <a href="">
                    <Facebook size={14}/>
                  </a>
                  <a href="">
                    <Twitter size={14}/>
                  </a>
                  <a href="">
                    <Instagram size={14}/>
                  </a>
                  <a href="">
                    <Youtube size={14}/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="text-center">
                <div className="logo mb-3 mx-auto">
                  <img src={logo} alt="" />
                </div>
                <p>
                  There’s a voice that keeps on calling me. Down the road,
                  that’s where I’ll always be. Every stop I make, I make a new
                  friend. Can’t stay for long
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className=" text-center d-flex flex-column contact">
                <h4>Contact Us</h4>
                <a href="">example@fashion.com</a>
                <a href="">02083483945</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-footer">
        <div className="container">
          <div>
            <ul className="d-flex gap-3 mb-0 justify-content-center justify-content-sm-start">
              {NavLinks.map((link) => (
                <li key={link.link}>
                  <Link to={link.url.toLocaleLowerCase()}>{link.link}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center my-5 pb-5 pb-lg-0">
        <p> &copy; 2023 Copyright All Right Reserved by HexFashion</p>
      </div>
    </div>
  );
};

export default Footer;
