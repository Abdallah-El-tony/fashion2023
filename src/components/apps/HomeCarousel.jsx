// ** images import
import person from '../../assets/carousel-person.png'
import mask from '../../assets/carousel-mask.png'
import textImg from '../../assets/carousel-textimg.png'
import 'animate.css';

// ** styls
import '../../style/home.css'


const HomeCarousel = () => {
  return (
    <div>
      <div className="container">
        <div
          id="carouselExampleInterval"
          className="carousel slide py-5 py-md-0"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
               <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
               <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
              <div className="row align-items-center flex-nowrap">
                <div className="col-md-6">
                  <div className="carousel-text ps-3 ps-md-5">
                    <h1 className='h1 animate__animated animate__flipInX animate__slow'>Winter <span>Dress</span> Collection</h1>
                    <p className='animate__animated animate__fadeInUpBig animate__slow'>Here’s a voice that keeps on calling me. Down the road, that’s where I’ll always be.</p>
                    <button className='filledBtn  mt-5 py-3 animate__animated animate__slow animate__zoomIn'>Shop Now</button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="carousel-images d-none d-md-block">
                    <img src={person} alt="" className='animate__animated animate__fadeInUpBig animate__slow'/>
                    <img src={mask} alt="" className='mask'/>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="carousel-text ps-3 ps-md-5">
                    <h1 className='h1 animate__animated animate__flipInX animate__slow'>Winter <span>Dress</span> Collection</h1>
                    <p className='animate__animated animate__fadeInUpBig animate__slow'>Here’s a voice that keeps on calling me. Down the road, that’s where I’ll always be.</p>
                    <button className='filledBtn mt-5 py-3 animate__animated animate__slow animate__zoomIn'>Shop Now</button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="carousel-images d-none d-md-block">
                    <img src={person} alt="" className='animate__animated animate__fadeInUpBig animate__slow'/>
                    <img src={mask} alt="" className='mask'/>
                  </div>
                </div>
              </div>
            </div>
            <img src={textImg} alt="" className='text-img'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
