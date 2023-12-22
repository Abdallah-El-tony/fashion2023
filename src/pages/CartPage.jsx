/* eslint-disable react-hooks/exhaustive-deps */
import { X } from "react-bootstrap-icons";
import { Breadcrump } from "../components";
import "../style/cart.css";
import { useNavigate } from "react-router-dom";

// ** redux
import { useSelector, useDispatch } from "react-redux";
import { CartActions } from "../store/slices/cartSlice";
import { useMemo } from "react";
import { ToastAction } from "../store/slices/toastSlice";
import { useBackToTop } from "../hooks/useBackToTop";

const CartPage = () => {

  // back to top
    useBackToTop()

  // ** store
  const { cart } = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  const {updateCart , resetCart} = CartActions;
  const {showSucessMessag} = ToastAction
  // ** states
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/checkout");
  };



  // calculate total price
const totalPrice = useMemo(()=> {
  return cart?.reduce(
    (acc, curr) => acc + curr.price* curr.qty,0)
    
},[cart])
  
  const handleUpdateCart = (type , id) => {
    if(type === "inc") dispatch(updateCart({id:id,type:'increment'}))
    else if(type ==='dec') dispatch(updateCart({id:id,type:'decrement'}))
    else dispatch(updateCart({id:id,type:'remove'}))

    dispatch(showSucessMessag('Cart Updated'))
    
  };
  return (
    <div>
      <div className="container">
        <Breadcrump slug="Cart Page" />
        {cart.length > 0 ? (
          <>
            <div className="row">
              <div className="col-xl-8">
                <div className="horizontal_table d-md-block d-none">
                  <table className="w-100">
                    <thead>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>SubTotal</th>
                      <th>Action</th>
                    </thead>
                    <tbody>
                      {cart.map((item) => (
                        <tr key={item.id} className="py-3">
                          <td className="d-flex gap-3 align-items-center py-3 ps-2">
                            <div className="item_img">
                              <img className="rounded" src={item.img} alt="" />
                            </div>
                            <div className="item_info">
                              <h5>{item.name} </h5>
                            </div>
                          </td>
                          <td>{item.price}</td>
                          <td>
                            <div className="quantity-controles d-flex gap-3">
                              <button onClick={() => handleUpdateCart("dec",item.id)}>
                                -
                              </button>
                              <input
                                type="text"
                                value={item.qty}
                                className="text-center"
                              />
                              <button onClick={() => handleUpdateCart("inc",item.id)}>
                                +
                              </button>
                            </div>
                          </td>
                          <td>${item.qty * item.price}.00</td> {/* sub total */}
                          <td className="remove-btn" onClick={()=>handleUpdateCart("remove",item.id)}>
                            <X size={28} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="virtical_table d-block d-md-none">
                  <table className="w-100 border border-bottom-1">
                    {cart.map(item=>(
                      <tbody key={item.id}>
                      <tr>
                        <th>Product</th>
                        <td className="d-flex gap-2 flex-column align-items-end">
                          <div className="item_img">
                            <img
                              className="rounded"
                              src={item.img}
                              alt=""
                            />
                          </div>
                          <div className="item_info">
                            <h5>{item.name} </h5>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>Price</th>
                        <td>{item.price}</td>
                      </tr>
                      <tr>
                        <th>Quantity</th>
                        <td>
                          <div className="quantity-controles d-flex gap-3 justify-content-end">
                            <button onClick={() => handleUpdateCart("dec",item.id)}>-</button>
                            <input
                              type="text"
                              value={item.qty}
                              className="text-center"
                            />
                            <button onClick={() => handleUpdateCart("inc",item.id)}>+</button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>Sub Total</th>
                        <td>$190.00</td>
                      </tr>
                      <tr>
                        <th>Action</th>
                        <td className="close-btn" onClick={() => handleUpdateCart("remove",item.id)}>
                          <span>
                            <X size={28} />
                          </span>
                        </td>
                      </tr>
                    </tbody>
                    ))}
                  </table>
                </div>
                <div className="mt-5 table__footer d-flex gap-1">
                  <h5 onClick={()=>navigate('/shop')}>Continue Shopping</h5>
                  <h5 onClick={()=>dispatch(resetCart())}>Clear Cart</h5>
                </div>
              </div>

              <div className="col-xl-4">
                <div className="cart_total mt-5 mt-xl-0">
                  <h4 className="pb-4">Cart Total:</h4>
                  <ul>
                    <li>
                      <h6>Sub Total</h6>
                      <span>${totalPrice}.00</span>
                    </li>
                    <li>
                      <spanb>Tax (Incl. --%)</spanb>
                      <span>--</span>
                    </li>
                    <li>
                      <h6>Total Amount</h6>
                      <span>${totalPrice}.00</span>
                    </li>
                  </ul>
                  <button className="filledBtn w-100" onClick={handleClick}>
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <h2 className="text-center my-5">Cart Is Empty</h2>
        )}
      </div>
    </div>
  );
};

export default CartPage;
