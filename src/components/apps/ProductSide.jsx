/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
// ** styles import
import "../../style/home.css";

// ** components
import SingleProduct from "./SingleProduct";

// ** hooks
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";

const ProductSide = ({ category }) => {
  const { data, fetchData } = useFetch();
  
  useEffect(() => {
    if (category === "All Category") {
      fetchData(`http://localhost:3000/AllProducts`);
    } else
      fetchData(`http://localhost:3000/AllProducts?category=${category}`);
  }, [category]);

  const DataItems = data.slice(0, 9);
  return (
    <div className="products__container">
      <div className="row">
        {DataItems.map((item , index) => (
          <div key={index} className="col-md-6 col-xl-4 animate__slideDown">
            <SingleProduct
              index ={item.id}
              flag="store"
              name={item.name}
              img={item.img}
              sales={item.sales}
              offer={item.offer}
              price={item.price}
              altPrice={item.altPrice}
              rating={item.rating}
              color={item.color}
              product={item}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSide;
