/* eslint-disable react/prop-types */
// ** styles
import "../../style/home.css";

import { useNavigate } from "react-router-dom";

// ** motion
import { motion } from "framer-motion";

// ** icons
import {
  Cart,
  SuitHeart,
  ArrowRepeat,
  Eye,
  StarFill,
} from "react-bootstrap-icons";

// ** redux
import { useDispatch } from "react-redux";
import { ToastAction } from "../../store/slices/toastSlice";
import { CartActions } from "../../store/slices/cartSlice";

const SingleProduct = ({
  flag,
  index,
  name,
  price,
  altPrice,
  img,
  offer,
  sales,
  rate,
  product,
}) => {
  // ** Hooks
  const navigator = useNavigate();
  const navigate = () => {
    navigator(`/viewproduct/:${index}`);
  };

  //** vars
  const item = { ...product, qty: 1 };

  // ** store
  const dispatch = useDispatch();
  const { showSucessMessag, showWarningMessage } = ToastAction;
  const { addToCart } = CartActions;

  const handleClick = (e, type) => {
    e.stopPropagation();
    switch (type) {
      case "cart": {
        dispatch(showSucessMessag("Item Added To Cart"));
        dispatch(addToCart(item));
        break;
      }

      case "wishlist": {
        dispatch(showWarningMessage());
        break;
      }
      case "compare":
        dispatch(showSucessMessag("Item Added To Compare"));
    }
  };

  // render starts
  const GetRate = () => {
    let rates = [];
    for (let i = 0; i < rate - 1; i++) {
      rates.push(<StarFill color="orange" size={14} />);
    }
    for (let j = rate; j <= 5; j++) {
      rates.push(<StarFill color="grey" size={14} />);
    }
    return (
      <div className="d-flex gap-1">
        {rates.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    );
  };

  return (
    <>
      <motion.div
        {...(index === 1 || index === 3
          ? {
              initial: { y: -200 },
              transition: { duration: 1 },
              whileInView: { y: 0 },
            }
          : index === 2
          ? {
              initial: { y: 100 },
              transition: { duration: 1 },
              whileInView: { y: 0 },
            }
          : null)}
        onClick={navigate}
        className={`product__container ${flag !== "slider" ? "mb-4" : ""}`}
      >
        <div className="product__header">
          <div className="product__container-img">
            <div className="product__img">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="product__buttons d-flex gap-3 justify-content-center">
            <button onClick={(e) => handleClick(e, "cart")}>
              <Cart size={18} />
            </button>
            <button onClick={(e) => handleClick(e, "wishlist")}>
              <SuitHeart size={18} />
            </button>
            <button onClick={(e) => handleClick(e, "compare")}>
              <ArrowRepeat size={18} />
            </button>
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={(e) => handleClick(e, "view")}
            >
              <Eye size={18} />
            </button>
          </div>
          <div className="product__flags">
            <span
              className={`descount ${!offer ? "d-none" : "d-inline-block"} `}
            >
              {offer}
            </span>
            <span className="arrival">{sales} Salses</span>
          </div>
        </div>
        <div className="product__description pt-4">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
            <h4 className="mb-2">{name}</h4>
            <div className="rates d-flex">
              <GetRate />
            </div>
          </div>
          <h6 className="d-flex gap-2 align-items-center mt-2">
            <span>${price}</span>
            <del>${altPrice}</del>
          </h6>
        </div>
      </motion.div>
      
    </>
  );
};

export default SingleProduct;
