// ** icons
import {Quote , StarHalf , StarFill} from 'react-bootstrap-icons'

// ** images
import avatar from '../../assets/client.jpg'

const TestimonialCard = () => {
  return (
    <div className='p-5 primary-bg-color me-2'>
      <div className="ts__img mb-3">
        <img src={avatar} alt="" className='rounded-circle' style={{width:'65px', height:'65px'}}/>
      </div>
      <div className="ts__feedback">
        <p>
          Best Shop is a company that sells top quality products at affordable
          prices. Their products are guarant
        </p>
      </div>
      <div className="ts__info mt-4 d-flex justify-content-between align-items-center">
        <div>
            <h4>Ethan Herara</h4>
            <div className="rates">
                <StarFill color='#FABE50'/>
                <StarFill color='#FABE50'/>
                <StarFill color='#FABE50'/>
                <StarFill color='#FABE50'/>
                <StarHalf color='#FABE50'/>
            </div>
        </div>
        <div className="quate">
            <Quote className='primary-text-color' size={80}/>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
