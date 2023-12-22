/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// ** sytels
import "../../style/shop.css";
// ** components
import { useCallback, useEffect, useState } from "react";
import Slider from "react-slider";
import "../../style/shop.css";

// ** context
import { useContext } from "react";
import { ShopContext } from "../../pages/Shop";


// ** constants data
import Colors from "./Colors";
import Rates from "./Rates";
import useFetch from "../../hooks/useFetch";
const MIN = 0;
const MAX = 1000;

export const Categories = () => {

  const {filterdValue,setFilterdValue , setFilterType , filters , setFilters} = useContext(ShopContext);

  const {data,fetchData} = useFetch()


  const getCurrentCategory = useCallback((e)=>{
    setFilterType('category')
    setFilterdValue(e.target.innerText)
  },[])

  useEffect(()=>{
    setFilters([...filters,filterdValue])
  },[filterdValue])

  useEffect(()=>{
    fetchData('http://localhost:3000/ProductCategories')
  },[])
  return (
    <div className="accordion" id="Categories">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Category
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#Categories"
        >
          <div className="accordion-body mt-3">
            <ul className="d-flex flex-column gap-4">
              {data.map((item, index) => (
                <li
                  key={index}
                  className={`category d-flex justify-content-between align-items-center`}
                >
                  <span onClick={getCurrentCategory}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export const Price = () => {
  const [values, setValues] = useState([MIN, MAX]);
  const {setFilters, setFilterType , setPrice} = useContext(ShopContext);
  useEffect(()=>{
    setFilterType('price')
    setPrice(values)
    setFilters([`$ (${values[0]} - ${values[1]})`])
  },[values])
  
  return (
    <div className="accordion" id="Price">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            Price
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#Price"
        >
          <div className="accordion-body">
            <Slider
              className="slider"
              onChange={setValues}
              value={values}
              min={MIN}
              max={MAX}
            />
            <h5 className="mt-3 pt-1">
              <span className="fw-normal">Price: </span>
              <span className="text-dark">${values[0]}</span>-
              <span className="text-dark">${values[1]}</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export const Size = () => {
  return (
    <div className="accordion" id="Size">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="true"
            aria-controls="collapseThree"
          >
            Size
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#Size"
        >
          <div className="accordion-body mt-3">
            <div className="sizes d-flex gap-3">
              <div className="position-relative">
                <span className="size">S </span>
                <span className="label">Small</span>
              </div>
              <div className="position-relative">
                <span className="size">L</span>
                <span className="label">Large</span>
              </div>
              <div className="position-relative">
                <span className="size">M</span>
                <span className="label">Medium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const Color = () => {
  return (
    <div className="accordion" id="Color">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="true"
            aria-controls="collapseFour"
          >
            Color
          </button>
        </h2>
        <div
          id="collapseFour"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#Color"
        >
          <div className="accordion-body">
            <Colors />
          </div>
        </div>
      </div>
    </div>
  );
};
export const Rating = () => {
  return (
    <div className="accordion" id="Rating">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="true"
            aria-controls="collapseFive"
          >
            Rating
          </button>
        </h2>
        <div
          id="collapseFive"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#Rating"
        >
          <div className="accordion-body">
            <Rates />
          </div>
        </div>
      </div>
    </div>
  );
};
export const Tags = ({ tags }) => {
  const {filterdValue,setFilterdValue , setFilterType , filters , setFilters} = useContext(ShopContext);

  const getTag = useCallback((tag)=>{
    setFilterType('tag')
    setFilterdValue(tag)
  },[])

  useEffect(()=>{
    setFilters([...filters,filterdValue])
  },[filterdValue])

  return (
    <div className="accordion" id="Tags">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSix"
            aria-expanded="true"
            aria-controls="collapseSix"
          >
            Tags
          </button>
        </h2>
        <div
          id="collapseSix"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#Tags"
        >
          <div className="accordion-body">
            <div className="d-flex flex-wrap gap-2 mt-3 tags tag-btn">
              {tags.map((tag) => (
                <button
                  onClick={()=>getTag(tag)}
                  key={tag}
                  className="tag py-1 text-secondary px-3 bg-transparent"
                >
                  <span> {tag} </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
