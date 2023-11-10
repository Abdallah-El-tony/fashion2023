// ** styles import
import { Search, X } from "react-bootstrap-icons";
import "../../style/header.css";
import { useRef, useState } from "react";

const NavSearch = () => {

    // **vars
    const searchIcon = useRef(null)

    // ** states
    const [open,setOpen] = useState(false)
    
    // ** functions
    const handleClickOpen = ()=>{
        setOpen(!open)
    }

  return (
    <div className="position-relative">
      <li className="center icon-button" onClick={handleClickOpen} ref={searchIcon}>
        <Search className="search-icon nav-icon" size={20} />
      </li>
      <div className={`search-box position-absolute end-0 ${open===false?'hide-search-bar':''}`}>
        <form action="" className="w-100">
          <Search className="search-icon button"/>
          <input type="text" placeholder="Search here..." className="w-100" />
         <div className='close-icon center button button-hover'><X size={32} onClick={handleClickOpen}/></div>
        </form>
      </div>
      
    </div>
  );
};

export default NavSearch;
