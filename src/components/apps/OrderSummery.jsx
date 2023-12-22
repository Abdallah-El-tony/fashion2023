/* eslint-disable react-hooks/exhaustive-deps */
import "../../style/product.css";

import { methods } from "../../constants";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";

// ** reduxt
import { useDispatch, useSelector } from "react-redux";
import { ToastAction } from "../../store/slices/toastSlice";

const OrderSummery = () => {
  // ** store
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.Cart);
  const { showErrorMessage } = ToastAction;

  // ** states
  const [isCash, setIsCash] = useState(false);
  const [tax] = useState(0);
  const [shippingCost] = useState(0);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [couponValue, setCouponValue] = useState("");
  const [isAgree, setIsAgree] = useState(false);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/cartpage");
  };

  const applayCoupone = () => {
    if (couponValue === "abdo") {
      setCouponDiscount(10);
    } else {
      dispatch(showErrorMessage("Invalid Coupon"));
    }
  };

  const changeHandler = () => {
    setIsCash(!isCash);
  };

  const totalPrice = useMemo(() => {
    return cart?.reduce(
      (acc, curr) => acc + curr.price * curr.qty,
      0
    );
  }, [cart]);

  const selectMethod = (e) => {
    document.querySelector(".active_method").classList.remove("active_method");
    e.target.closest(".method").classList.add("active_method");
    console.log(isCash);
  };
  return (
    <div>
      <div className="order_summery mt-4 mt-lg-0">
        <h2 className="mb-4">Order Summery</h2>
        <ul className="first_lvl">
          <li className="d-flex gap-3 flex-wrap pt-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-50"
              value={couponValue}
              onChange={(e) => setCouponValue(e.target.value)}
            />
            <button
              className="coupon-btn border-0 bg-transparent primary-text-color"
              onClick={applayCoupone}
            >
              Apply Coupon
            </button>
          </li>
          <li>
            <div className="order_products d-flex flex-column gap-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="order__product-container d-flex justify-content-between align-items-center"
                >
                  <div className="product d-flex gap-3 align-items-center">
                    <div className="product_img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="product_info d-flex flex-column gap-2">
                      <h6>{item.name}</h6>
                      <p>
                        Quantity: <span>{item.qty}</span>
                      </p>
                    </div>
                  </div>
                  <span className="fw-semibold">${item.price}.00</span>
                </div>
              ))}
            </div>
          </li>
          <li className="d-flex justify-content-between align-items-center">
            <h6 className="fw-semibold">Sub Total</h6>
            <h6 className="fw-semibold">${totalPrice}.00</h6>
          </li>
          <li>
            <ul className="second-lvl">
              <li className="d-flex justify-content-between align-items-center">
                <h6>Tax (Incl)</h6>
                <h6>${tax}.00</h6>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <h6>Coupon Discount (-)</h6>
                <h6>${couponDiscount}.00</h6>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <h6>Shipping Cost (+)</h6>
                <h6>${shippingCost}.00</h6>
              </li>
            </ul>
          </li>
          <li className="d-flex justify-content-between align-items-center">
            <h6 className="fw-semibold">Total Amount</h6>
            <h6 className="fw-semibold">
              ${totalPrice + tax + shippingCost - couponDiscount}.00
            </h6>
          </li>
        </ul>
        <input
          type="checkbox"
          id="isCash"
          className="me-2 border-1"
          checked={isCash}
          onChange={changeHandler}
        />
        <label htmlFor="isCash" className="fs-6">
          Cash On Delivery
        </label>
        <div
          className={`payment__metionds-container ${
            isCash ? "d-none" : "block"
          }`}
        >
          <h5 className="my-4">Select Payment Method</h5>
          <div className="methods d-flex flex-wrap mb-4">
            {methods.map((method, index) => (
              <div
                key={index}
                className={`method ${index == 0 ? "active_method" : ""}`}
                onClick={(e) => selectMethod(e)}
              >
                <img src={method} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex gap-3 align-items-start">
          <input
            type="checkbox"
            id="condition"
            className="border-1 mt-1"
            checked={isAgree}
            onChange={() => setIsAgree(!isAgree)}
          />
          <label htmlFor="condition" className="fs-6 mt-0">
            <p>
              I have read and agree to the website{" "}
              <a href="#" className="primary-text-color">
                terms and conditions*
              </a>
            </p>
          </label>
        </div>
        <div className="button d-flex flex-column gap-3 mt-4">
          <button
            className={`filledBtn py-3`}
            onClick={() => {
              !isAgree
                ? dispatch(
                    showErrorMessage("Please agree to the terms and conditions")
                  )
                : "";
            }}
          >
            Proceed To Checkout
          </button>
          <button className="outlinedBtn py-3" onClick={handleClick}>
            Return To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummery;
