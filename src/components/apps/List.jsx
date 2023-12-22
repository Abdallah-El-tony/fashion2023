/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// ** types import
import PropTypes from "prop-types";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const List = ({ type, cartList }) => {
  const [cartSize, setCartSize] = useState(0);

  
useEffect(()=>{
  if(cartList) {
    setCartSize(cartList.length);
  }
},[cartList])

// calculate total price
const totalPrice = useMemo(()=> {
  return cartList?.reduce(
    (acc, curr) => acc + curr.price * curr.qty,0)
    
},[cartList])
     
  const navigate = useNavigate();

  const handleClick = () => {
    if (type == "Cart") {
      navigate("/cartpage");
    } else navigate("/wishlistproducts");
  };

  const gotoCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div className="list">
      {cartSize === 0 ? (
        <p>No Items In {type}</p>
      ) : (
        <div>
          <div className="current_porducts d-flex flex-column gap-3">
            {cartList.map((item, index) => (
              <div
                key={index}
                className="product_container d-flex justify-content-between align-items-center"
              >
                <div className="product d-flex gap-3 align-items-center">
                  <div className="product_img w-25 h-25">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="product_desc">
                    <h5 className="mb-2">{item.name}</h5>
                    <h6 className="primary-text-color">${item.price}</h6>
                  </div>
                </div>
                <h5 className={`${type == "Wishlist" ? "d-none" : ""}`}>
                  {item.qty}
                </h5>
              </div>
            ))}
          </div>
          <div
            className={`total_amount d-flex justify-content-between align-items-center my-4 ${
              type == "Wishlist" ? "d-none" : ""
            }`}
          >
            <h5>Total Amount</h5>
            <h5>${totalPrice}.00</h5>
          </div>
          <div className="button d-flex flex-column gap-3 mt-4">
            <button
              className={`filledBtn py-3 ${type == "Wishlist" ? "d-none" : ""}`}
              onClick={gotoCheckout}
            >
              CheckOut
            </button>
            <button className="outlinedBtn py-3" onClick={handleClick}>
              View {type}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
List.propTypes = {
  type: PropTypes.string.isRequired,
};
export default List;
