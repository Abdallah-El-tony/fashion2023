/* eslint-disable react-hooks/exhaustive-deps */
import Breadcrump from "../Breadcrump";
// ** styles
import "../../style/product.css";
import { Gift } from "react-bootstrap-icons";

// ** reduxt
import { useDispatch } from "react-redux";
import { CartActions } from "../../store/slices/cartSlice";
import { useParams } from "react-router-dom";
// ** custom hooks
import { useBackToTop } from "../../hooks/useBackToTop";
import { useEffect, useRef, useState } from "react";
import { ToastAction } from "../../store/slices/toastSlice";
import { useNavigate } from "react-router-dom";


const ViewProduct = () => {
  // vars
  const {id} = useParams();
  const slug = + id[1]

  const mainImgRef = useRef(null)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { addToCart, changeQty } = CartActions;
  const { showSucessMessag } = ToastAction;

  // states 
  const [qty, setQty] = useState(1);
  const [current,setCurrent] = useState({})

  useBackToTop();

  const changeQtyHandler = (type) => {
    switch (type) {
      case "inc": {
        setQty(qty + 1);
        break;
      }
      case "dec": {
        if (qty > 1) {
          setQty(qty - 1);
        }
        break;
      }
      default: {
        setQty(1);
        break;
      }
    }
  };
  const onChange = (e) => {
    setQty(+e.target.value);
  };
  
  const addItemsToCart = () => {
    dispatch(addToCart(current));
    dispatch(changeQty({ id: slug, qty: qty >= 1 ? qty : 1 }));
    dispatch(showSucessMessag("Item Add To Cart"));
  };
  
  const setActiveSumnail = (src)=>{
    mainImgRef.current.src=src;
  }
  useEffect(()=>{
    const fetchData = async()=>{
      await fetch(`http://localhost:3000/AllProducts?id=${slug}`)
      .then(res=>res.json()).then(data=>setCurrent(data[0]))
    }
    fetchData()
    setCurrent({...current,qty:qty})
  },[qty, slug])
  
  
  return (
    <div>
      <div className="container">
        <Breadcrump slug={current.name} />
        <div className="mb-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="main_img mb-4">
                <img
                  ref={mainImgRef}
                  src={current.img}
                  alt=""
                />
              </div>
              <div className="submnails d-flex gap-3">
                <div className="submains__item">
                  <img
                    onClick={() =>
                      setActiveSumnail(
                        "https://hexfashion.xyz/assets/tenant/uploads/media-uploader/hexfashion/frame-345781669216290.png"
                      )
                    }
                    src="https://hexfashion.xyz/assets/tenant/uploads/media-uploader/hexfashion/frame-345781669216290.png"
                    alt=""
                  />
                </div>
                <div className="submains__item">
                  <img
                    onClick={() =>
                      setActiveSumnail(
                        "https://hexfashion.xyz/assets/tenant/uploads/media-uploader/hexfashion/frame-34503-min1668592565.jpg"
                      )
                    }
                    src="https://hexfashion.xyz/assets/tenant/uploads/media-uploader/hexfashion/frame-34503-min1668592565.jpg"
                    alt=""
                  />
                </div>
                <div className="submains__item">
                  <img
                  onClick={() =>
                    setActiveSumnail(
                      "https://hexfashion.xyz/assets/tenant/uploads/media-uploader/hexfashion/frame-34502-min1668592565.jpg"
                    )
                  }
                    src="https://hexfashion.xyz/assets/tenant/uploads/media-uploader/hexfashion/frame-34502-min1668592565.jpg"
                    alt=""
                  />
                </div>
                <div className="submains__item">
                  <img
                   onClick={() =>
                    setActiveSumnail(
                      "https://hexfashion.xyz/assets/tenant/uploads/media-uploader/hexfashion/frame-34500-min1668592563.jpg"
                    )
                  }
                    src="https://hexfashion.xyz/assets/tenant/uploads/media-uploader/hexfashion/frame-34500-min1668592563.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product__details ms-0 ms-lg-5 mt-5 mt-lg-0">
                <h2>
                  {current.name}
                  <br />
                  <span className="fs-6 bg-success text-white fw-normal px-2 py-1">
                    {current.sales} Sales
                  </span>
                </h2>
                <div className="d-flex gap-5 my-4">
                  <h6 className="text-secondary">Status</h6>
                  <h6 className="text-success">In Stock</h6>
                </div>
                <div className="stuck d-flex gap-5 my-4">
                  <h5 className="text-secondary">${current.price}</h5>
                  <h5>
                    <del className="text-secondary">${current.altPrice}</del>
                  </h5>
                </div>
                <div className="quantity d-flex gap-3 align-items-center flex-wrap">
                  <p>Quantity:</p>
                  <button onClick={() => changeQtyHandler("dec")}>-</button>
                  <input type="text" value={current?.qty} onChange={onChange} />
                  <button onClick={() => changeQtyHandler("inc")}>+</button>
                  <p className="text-success fw-semibold">only 63 item left</p>
                </div>
                <div className="buttons my-4 d-flex justify-content-between flex-wrap gap-3 gap-lg-0">
                  <button onClick={addItemsToCart}>Add To Card</button>
                  <button onClick={() => navigate("/checkout")}>Buy Now</button>
                </div>
                <ul className="d-flex flex-column gap-2">
                  <li>
                    <span>Unit: </span>
                    <b>1 pice</b>
                  </li>
                  <li>
                    <span>SKU: </span>
                    <b>girl-dress-1</b>
                  </li>
                </ul>
                <div className="services d-flex gap-5 gap-lg-3 mt-5 flex-wrap">
                  <div className="box">
                    <h5>Estimated Delivery</h5>
                    <p>With 4 Days</p>
                    <div className="gift">
                      <Gift />
                    </div>
                  </div>
                  <div className="box">
                    <h5>Free Shipping</h5>
                    <p>Order over 100$</p>
                    <div className="gift">
                      <Gift />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
