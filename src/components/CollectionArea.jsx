// ** img import
import person1 from "../assets/collection-person1.png";
import person2 from "../assets/collection-person2.png";

// ** styles
import "../style/home.css";
const CollectionArea = () => {
  return (
    <div className="section position-relative">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="collection__card">
              <img src={person1} alt="" />
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <div className="collection__card">
              <img src={person2} alt="" />
            </div>
          </div>
        </div>
        <div className="cart__description text-center mx-auto">
            <span className="primary-text-color">Summer Sale</span>
            <h2 className="h2 mt-1">Exclusive Dress Collection</h2>
            <button className="filledBtn mt-3">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default CollectionArea;
