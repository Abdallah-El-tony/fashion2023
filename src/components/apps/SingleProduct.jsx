/* eslint-disable react/prop-types */
// ** styles
import "../../style/home.css";

// ** motion
import {motion} from 'framer-motion'
// ** icons
import { Cart, SuitHeart, ArrowRepeat, Eye } from "react-bootstrap-icons";

const SingleProduct = ({ flag , index }) => {

  return (
    <motion.div
    {
      ...(index === 1 || index === 3) ? (
        {
          initial: { y: -200 },
          transition: { duration: 1 },
          whileInView: { y: 0 }
        }
      ) : index === 2 ?({
        initial: { y: 100 },
        transition: { duration: 1 },
        whileInView: { y: 0 }
      }) :null 
    }
      className={`product__container ${flag !== "slider" ? "mb-4" : ""}`}>
      <div className="product__header">
        <div
          className="product__container-img"
          style={{ backgroundColor: `${flag !== "slider" ? "#eff0ff" : ""}` }}
        >
          <div className="product__img">
            <img
              src="https://hexfashion.xyz/assets/tenant/uploads/media-uploader/hexfashion/frame-34482-min1668590518.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="product__buttons d-flex gap-3 justify-content-center">
          <button>
            <Cart size={18} />
          </button>
          <button>
            <SuitHeart size={18} />
          </button>
          <button>
            <ArrowRepeat size={18} />
          </button>
          <button>
            <Eye size={18} />
          </button>
        </div>
        <div className="product__flags">
          <span className="descount">88% Off</span>
          <span className="arrival">100 Salses</span>
        </div>
      </div>
      <div className="product__description pt-4">
        <h4>Buck Long Sleeve</h4>
        <h6 className="d-flex gap-2 align-items-center">
          <span>63$</span>
          <del>80$</del>
        </h6>
      </div>
    </motion.div>
  );
};

export default SingleProduct;
