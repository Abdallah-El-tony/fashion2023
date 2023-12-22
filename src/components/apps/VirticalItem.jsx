/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ArrowRepeat, Eye, StarFill, SuitHeart } from "react-bootstrap-icons";
import "../../style/home.css";
import '../../style/shop.css'


// ** redux
import { useDispatch } from "react-redux";
import { ToastAction } from "../../store/slices/toastSlice";
import { CartActions } from "../../store/slices/cartSlice";
const {addToCart} = CartActions;

const VirticalItem = ({name,price,altPrice,img,rate,product}) => {
  // ** reduxt
  const dispatch = useDispatch();
  const { showSucessMessag, showWarningMessage } = ToastAction;

  const item = {...product,qty:1}
  const handleClick = (e, type) => {
    e.stopPropagation();
    switch (type) {
      case "cart": {
        dispatch(showSucessMessag('Item Added To Cart'));
        dispatch(addToCart(item));
        break;
      }

      case "wishlist": {
        dispatch(showWarningMessage());
        break;
      }
      case "compare":
        dispatch(showSucessMessag('Item Added To Compare'));
    }
  };

  return (
    <div className="mb-5">
      <div className="row">
        <div className="col-xl-6">
          <div className="item__img">
            <img
              src={img}
              alt=""
            />
          </div>
        </div>
        <div className="col-xl-6">
          <div
            className="py-4 d-flex flex-column gap-4"
            style={{ borderBottom: "2px solid #ddd" }}
          >
            <div className="rates d-flex">
              <StarFill color="orange" size={14} />
              <StarFill color="orange" size={14} />
              <StarFill color="orange" size={14} />
            </div>
            <h5>{name}</h5>
            <h6 className="d-flex gap-2 align-items-center">
              <span className="fs-5 primary-text-color ">${price}</span>
              <del>${altPrice}</del>
            </h6>
            <p>
              This product is from a small <br /> business brand. Support small.
            </p>
          </div>
          <div className="buttons-group d-flex gap-3 mt-5 flex-wrap">
            <button className="filledBtn" onClick={(e)=>handleClick(e,'cart')}>
              Add to Cart
            </button>
            <button onClick={(e)=>handleClick(e,'wishlist')}>
              <SuitHeart size={20} />
            </button>
            <button onClick={(e)=>handleClick(e,'compare')}>
              <ArrowRepeat size={20} />
            </button>
            <button onClick={(e)=>handleClick(e,'view')}>
              <Eye size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirticalItem;
