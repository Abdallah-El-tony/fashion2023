import { ArrowRepeat, Gift, Share, SuitHeart } from "react-bootstrap-icons";
import "../../style/home.css";
const QuickView = () => {
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>

            <div className="modal-body">
              <div className="mb-5">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="main_img mb-4">
                      <img
                        src="https://hexfashion.xyz/assets/tenant/uploads/media-uploader/hexfashion/frame-345781669216290.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="product__details ms-0 ms-lg-5 mt-4 mt-lg-0">
                      <h2>
                        orange wedding dress
                        <br />{" "}
                        <span className="fs-6 bg-success text-white fw-normal px-2 py-1">
                          100 Sales
                        </span>
                      </h2>
                      <div className="d-flex gap-5 my-4">
                        <h6 className="text-secondary">Status</h6>
                        <h6 className="text-success">In Stock</h6>
                      </div>
                      <div className="stuck d-flex gap-5 my-4">
                        <h5 className="text-secondary">$750</h5>
                        <h5>
                          <del className="text-secondary">$800</del>
                        </h5>
                      </div>
                      <div className="quantity d-flex gap-3 align-items-center flex-wrap">
                        <p>Quantity:</p>
                        <button>-</button>
                        <input type="text" value={1} />
                        <button>+</button>
                        <p className="text-success fw-semibold">
                          only 63 item left
                        </p>
                      </div>
                      <div className="buttons my-4 d-flex justify-content-between flex-wrap gap-3 gap-lg-0">
                        <button>Add To Card</button>
                        <button>Buy Now</button>
                      </div>
                      <ul className="icons d-flex gap-4 pb-4 border-bottom border-light-subtle">
                        <li className="primary-bg text-white fw-semibold px-2 center rounded">
                          <SuitHeart size={20} />
                        </li>
                        <li className="primary-bg text-white fw-semibold p-2 rounded center">
                          <ArrowRepeat size={20} />
                        </li>
                        <li className="primary-bg text-white fw-semibold p-2 rounded ">
                          <Share size={18} />
                          <ul className="position-absolute">
                            <li>f</li>
                            <li>t</li>
                            <li>in</li>
                            <li>p</li>
                          </ul>
                        </li>
                      </ul>
                      <h5 className="links my-4">
                        <a href="#" className="text-secondary">
                          Woman
                        </a>{" "}
                        |{" "}
                        <a href="#" className="text-secondary">
                          Woman
                        </a>{" "}
                        |{" "}
                        <a href="#" className="text-secondary">
                          Woman
                        </a>
                      </h5>
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
                      <div className="services d-flex gap-3 mt-5 flex-wrap gap-3">
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
        </div>
      </div>
    </div>
  );
};

export default QuickView;
