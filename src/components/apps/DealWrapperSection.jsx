// ** img imports
import Person from "../../assets/deal-person.png";

// styles imports 
import '../../style/home.css'
const DealWrapperSection = () => {
  return (
    <div className="position-relative mt-5">
      <div className="container primary-bg-color">
        <div className="row justify-content-between align-items-center">
          <div className="col ps-lg-5">
            <div className="deal__content">
              <h1 className="fw-semibold mb-4">Deal of the Week</h1>
              <p className>
                Why does this particular feature stand out to you right now? The
                countdown is finished!
              </p>
              <button className="filledBtn mt-4">Shop Now</button>
            </div>
          </div>
          <div className="col d-none d-lg-block">
            <div className="deal__img ms-auto">
              <img src={Person} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealWrapperSection;
