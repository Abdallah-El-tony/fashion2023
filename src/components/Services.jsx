// ** icons import
import { Truck, ArrowDownCircle, Lock, Gift } from "react-bootstrap-icons";

// ** styles 
import '../style/footer.css'
const Services = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 col-xxl-3">
            <div className="service__card text-center d-flex flex-column gap-1 align-items-center mb-4 mb-xxl-0 p-5">
              <Truck color='#ff805d' size={36}/>
              <h4 className='mt-2'>Free Shipping</h4>
              <p>Order Over $90</p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xxl-3">
            <div className="service__card text-center d-flex flex-column gap-1 align-items-center mb-4 mb-xxl-0 p-5">
              <ArrowDownCircle color='#ff805d' size={36}/>
              <h4 className='mt-2'>Early Reture</h4>
              <p>Within 15 days</p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xxl-3">
            <div className="service__card text-center d-flex flex-column gap-1 align-items-center mb-4 mb-xxl-0 p-5">
              <Lock color='#ff805d' size={36}/>
              <h4 className='mt-2'>Secure Payment</h4>
              <p>Online Shopping</p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xxl-3">
            <div className="service__card text-center d-flex flex-column gap-1 align-items-center mb-4 mb-xxl-0 p-5">
              <Gift color='#ff805d' size={36}/>
              <h4 className='mt-2'>Best Offer</h4>
              <p>Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
