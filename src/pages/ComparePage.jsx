import { Breadcrump } from "../components";
import '../style/product.css'

const ComparePage = () => {
  return (
    <div>
      <div className="container">
        <Breadcrump slug="Compare Products" />
        <div className="porducts">
          <div className="text-center mt-5 pt-5">
            <h3>No Products To Compare</h3>
          </div>
          {/* <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="procudts__product">
                <div className="product__img  mb-3">
                  <img
                    src="https://hexfashion.xyz/assets/tenant/uploads/media-uploader/hexfashion/frame-345781669216290.png"
                    alt=""
                  />
                </div>
                <div className="product__description d-flex flex-column gap-2">
                  <h5>Buck Long Sleeve</h5>
                  <h6 className="d-flex gap-2 align-items-center">
                    <span>63$</span>
                    <del>80$</del>
                  </h6>
                  <button className="border-0 bg-transparent text-start fw-semibold fs-5 py-2 px-0 border border-bottom border-2">Remove</button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ComparePage;
