/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// ** alice slider libiray
import AliceCarousel from "react-alice-carousel";

// ** css
import "react-alice-carousel/lib/alice-carousel.css";
import '../../style/home.css'


// ** images
import brand1 from "../../assets/brand-1.png";
import brand2 from "../../assets/brand-2.png";
import brand3 from "../../assets/brand-3.png";
import brand4 from "../../assets/brand-4.png";
import brand5 from "../../assets/brand-5.png";

// ** helpers
import {responsive1 , responsive2 , responsive3 , responsive4} from '../../constants'
import {useSplitBlogs, useSplitClients, useSplitFeaturedProducts, useSplitFlashProducts, useSplitTeam} from "../../hooks/useSplit";

const CustomSlider = ({ type }) => {

  // ** vars
  const blogs = useSplitBlogs()
  const clients = useSplitClients()
  const team = useSplitTeam()
  const flashProducts = useSplitFlashProducts()
  const featuredProduct = useSplitFeaturedProducts()
  const partiners = [
    <div className="brand__img" key={1}><img src={brand1} alt="" /></div>,
    <div className="brand__img" key={2}><img src={brand2} alt="" /></div>,
    <div className="brand__img" key={3}><img src={brand3} alt="" /></div>,
    <div className="brand__img" key={4}><img src={brand4} alt="" /></div>,
    <div className="brand__img" key={5}><img src={brand5} alt="" /></div>,

  ];
  
  return (
    <>
      <AliceCarousel
        items={
          type === "feedbacks" || type ==='testimonials'
            ? clients
            : type === "blogs" ? blogs
            : type === "partiners" ? partiners
            : type ==='team' ? team
            : type === "flash"? flashProducts
            :type === "featured"? featuredProduct
            :[]
        }
        responsive={
          type === "feedbacks"
            ? responsive2
            : type ==='testimonias'? responsive1
            : type === "flash" || type === "blogs"? responsive3
            : type=== 'partiners' ? responsive4
            :responsive1
        }
        controlsStrategy="alternate"
        autoPlay={true}
        infinite={true}
        autoPlayInterval={5000}
        disableButtonsControls = {type ==='partiners'? true : false}
        disableDotsControls={type ==='partiners'? false : true}
      />
    </>
  );
};

export default CustomSlider;
