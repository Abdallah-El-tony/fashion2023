// ** styles
import "../../style/product.css";
import "../../style/animations.css";
import { Link } from "react-router-dom";

const Tabs = () => {
  const setActiveTab = (e) => {
    document.querySelector(".tab_active").classList.remove("tab_active");
    e.target.classList.add("tab_active");
    document
      .querySelector(".active-content")
      .classList.remove("active-content");
    if (e.target.innerText === "Ship & Return") {
      document.getElementById("Ship").classList.add("active-content");
    } else
      document
        .getElementById(e.target.innerText)
        .classList.add("active-content");
  };
  return (
    <div>
      <div className="container">
        <div className="tabs d-flex justify-content-center gap-3 border-bottom pb-4">
          <div className="tab tab_active" onClick={setActiveTab}>
            Description
          </div>
          <div className="tab" onClick={setActiveTab}>
            Reviews
          </div>
          <div className="tab" onClick={setActiveTab}>
            Ship & Return
          </div>
        </div>
        <div
          className="tabs__content active-content pt-4 animate__slideDown"
          id="Description"
        >
          You can exchange any product in your order up to 30 days after
          delivery. Shipping on your first exchange for any item is free of
          charge. If you decide to exchange that item again (i.e. more than
          once) you will be responsible for any forward and return shipping
          fees. Please note: All exchanges must be made with the original
          Article packaging. If you do not have the original packaging on hand,
          there is an additional $50 repackaging fee per item.
        </div>
        <div className="d-flex justify-content-center pt-4">
          <div className="col-lg-3 tabs__content  animate__slideDown"  id="Reviews">
            <h4>Hello! Let Us Get Started</h4>
            <h6 className="mt-1 mb-3">Sign in to continue.</h6>
            <form action="" className="d-flex flex-column gap-3">
              <input type="text" placeholder="Username" className="form-control py-3"/>
              <input type="password" placeholder="Password" className="form-control py-3"/>
              <input type="submit"  value='Sign In' className="border-0 bg-transparent text-start fs-5"/>
            </form>
            <p>Do not have an account? <Link to='/signup' className="text-primary">Create</Link></p>
          </div>
        </div>
        <div className="tabs__content pt-4 animate__slideDown" id="Ship">
          Return in 7 Days is acceptable
        </div>
      </div>
    </div>
  );
};

export default Tabs;
