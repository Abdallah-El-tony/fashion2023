/* eslint-disable react/prop-types */
// ** alice slider libiray
import AliceCarousel from "react-alice-carousel";

// ** css
import "react-alice-carousel/lib/alice-carousel.css";
import '../../style/home.css'

import SingleProduct from "./SingleProduct";
import TestimonialCard from "./TestimonialCard";
import BlogItem from "./BlogItem";

// ** images
import brand1 from "../../assets/brand-1.png";
import brand2 from "../../assets/brand-2.png";
import brand3 from "../../assets/brand-3.png";
import brand4 from "../../assets/brand-4.png";
import brand5 from "../../assets/brand-5.png";

// ** helpers
import {responsive1 , responsive2 , responsive3 , responsive4} from '../../constants'

const CustomSlider = ({ type }) => {
  // ** vars
  const clients = [
    <TestimonialCard key={1} />,
    <TestimonialCard key={2} />,
    <TestimonialCard key={3} />,
    <TestimonialCard key={4} />,
  ];
  const products = [
    <SingleProduct key={1} flag="slider" index={1}/>,
    <SingleProduct key={2} flag="slider" index={2}/>,
    <SingleProduct key={3} flag="slider" index={3}/>,
    <SingleProduct key={4} flag="slider" index={4}/>,
  ];
  const blogs = [
    <BlogItem key={1} flag="slider" />,
    <BlogItem key={2} flag="slider" />,
    <BlogItem key={3} flag="slider" />,
    <BlogItem key={4} flag="slider" />,
  ];
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
          type === "feedbacks"
            ? clients
            : type === "blogs" ? blogs
            : type === "partiners" ? partiners
            :products
        }
        responsive={
          type === "feedbacks"
            ? responsive2
            : type === "flash" || type === "blogs"
            ? responsive3
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
