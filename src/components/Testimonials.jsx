/* eslint-disable react/no-unescaped-entities */

import CustomSlider from "./apps/CustomSlider";

// ** styles
import '../style/home.css'

const Testimonials = () => {
  return (
    <div className="section testimonials">
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-4 ps-0">
            <div className="client__title mt-5 mb-4 mb-lg-0">
              <h2 className="h2 mb-3">Client's Feedback</h2>
              <p>
                Best Shop is a company
                that sells top quality products at affordable prices. Their
                products are guarant
              </p>
            </div>
          </div>
          <div className="col-lg-8 p-0">
            <CustomSlider type='feedbacks'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
