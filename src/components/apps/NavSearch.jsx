// ** styles import
import { Search, X } from "react-bootstrap-icons";
import "../../style/header.css";
import { useRef, useState } from "react";
import useFetch from "../../hooks/useFetch";

const NavSearch = () => {
  // **vars
  const searchIcon = useRef(null);
  const { data, fetchData } = useFetch();

  // ** states
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [timer , setTimer] = useState(null)
  

  // ** functions
  const handleClickOpen = () => {
    document
      .querySelector(".product_suggestion")
      .classList.remove("show_overlay");
    setOpen(!open);
  };

  // debounce search for optimization
  const handleChange = (e) => {

    document.querySelector(".product_suggestion").classList.add("show_overlay");
    clearTimeout(timer)
    setValue(e.target.value);
    const newTimer = setTimeout(()=>{
      fetchData(`http://localhost:3000/AllProducts?q=${value}`);
      
    },1000)
    setTimer(newTimer)
  };

  return (
    <>
      <div className="position-relative">
        <li
          className="center icon-button"
          onClick={handleClickOpen}
          ref={searchIcon}
        >
          <Search className="search-icon nav-icon" size={20} />
        </li>
        <div
          className={`search-box position-absolute end-0 ${
            open === false ? "hide-search-bar" : ""
          }`}
        >
          <form action="" className="w-100">
            <Search className="search-icon button" />
            <input
              type="text"
              placeholder="Search here..."
              className="w-100"
              onChange={handleChange}
              value={value}
            />
            <div
              className="close-icon center button button-hover"
              onClick={handleClickOpen}
            >
              <X size={32} />
            </div>
            <div className="product_suggestion">
              <h5 className="title">Product Suggestions</h5>
              <div className={`${value===''?'d-none':'d-block'}`}>
                {data.map((item) => (
                  <div
                    key={item.id}
                    className="product d-flex gap-3 align-items-center mt-4"
                  >
                    <div className="product_img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="product__description d-flex flex-column gap-2">
                      <h5>{item.name}</h5>
                      <h6>
                        <span className="text-dark me-3">${item.price}</span>
                        <del>${item.altPrice}</del>
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NavSearch;

{
  /*  */
}
