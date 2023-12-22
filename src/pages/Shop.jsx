/* eslint-disable react-hooks/exhaustive-deps */
// ** icons
import { Search, X, ChevronDown, BorderAll, List } from "react-bootstrap-icons";

// ** context api
import { createContext } from "react";

// ** components
import { Breadcrump } from "../components";

// ** styels
import "../style/shop.css";
import "../style/animations.css";

import {
  Categories,
  Color,
  Price,
  Rating,
  Size,
  Tags,
} from "../components/apps/Accordion";

// ** compontents
import SingleProduct from "../components/apps/SingleProduct";
import { useEffect, useState } from "react";
import { tags } from "../constants";
import { useBackToTop } from "../hooks/useBackToTop";
import VirticalItem from "../components/apps/VirticalItem";
import useFetch from "../hooks/useFetch";

export const ShopContext = createContext("All");

const Shop = () => {
  //** Hooks
  const {data, fetchData } = useFetch();

  // ** states
  const [toggle, setToggle] = useState(false);
  const [layout, setLayOut] = useState("horizontal");
  const [filterdValue, setFilterdValue] = useState("All");
  const [filterType, setFilterType] = useState("category");
  const [searchValue, setSearchValue] = useState("");
  const [timer, setTimer] = useState(null);
  const [price,setPrice] = useState([])

  // constants
  const recordPerPage = 9;
  const [currPage, setCurrPage] = useState(1);
  const lastIndex = currPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const DataItems = data.slice(firstIndex, lastIndex);
  const records = Math.ceil(data?.length / recordPerPage);
  const numbers = Array.from({ length: records }, (_, index) => index + 1);
  const [filters, setFilters] = useState([]);


  useEffect(() => {
    if (
      (filterdValue === "All" ||
      filters.length === 0 ||
      filters[filters.length - 1] == "All") && filterType !=='price'
    )
      fetchData("http://localhost:3000/AllProducts");
    else if(filterType === 'tag') {
      console.log()
      fetchData(`http://localhost:3000/AllProducts?q=${filters[filters.length - 1]}`);
    }
    else if(filterType === 'price') {
      fetchData(`http://localhost:3000/AllProducts?price_gte=${price[0]}&&price_lte=${price[1]}`)
    }
    else {
      fetchData(
        `http://localhost:3000/AllProducts?${filterType}=${
          filters[filters.length - 1]}`
      );
    }
      
  }, [filterdValue, filterType, filters , price]);

  useBackToTop(currPage)

  // ** functions
  const toggleList = () => {
    setToggle(!toggle);
  };

  const handleLayout = (e, layout) => {
    if (layout == "horizontal") {
      setLayOut("horizontal");
    } else {
      setLayOut("virtical");
    }
    document.querySelector(".active-layout").classList.remove("active-layout");
    e.target.closest("button").classList.add("active-layout");
  };

  const changePage = (e, curr) => {
    document.querySelector(".active-btn").classList.remove("active-btn");
    e.target.classList.add("active-btn");
    setCurrPage(curr);
  };

  const onChangeSearch = (e) => {
    clearTimeout(timer);
    setSearchValue(e.target.value);
    const newTimer = setTimeout(() => {
      fetchData(`http://localhost:3000/AllProducts?q=${searchValue}`);
    }, 1000);
    setTimer(newTimer);
  };

  const removeFilter = (index) => {
    const newFilters = filters.filter((item) => item !== filters[index]);
    setFilters(newFilters);
  };

  // ** context api
  const contextValue = {
    setFilterdValue,
    filterdValue,
    filterType,
    setFilterType,
    filters,
    setFilters,
    price,
    setPrice
  };

  return (
    <ShopContext.Provider value={contextValue}>
      <div className="overflow-hidden">
        <Breadcrump slug="Shop" />
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 col-lg-4">
              <button
                className="listIcon d-block d-md-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasScrolling"
                aria-controls="offcanvasScrolling"
              >
                <span>
                  <List size={28} />
                </span>
              </button>

              <div
                className="offcanvas offcanvas-start"
                data-bs-scroll="true"
                data-bs-backdrop="false"
                tabIndex="-1"
                id="offcanvasScrolling"
                aria-labelledby="offcanvasScrollingLabel"
              >
                <div className="offcanvas-header">
                  <button
                    type="button"
                    className="closeBtn d-none d-sm-block"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    <X size={35} />
                  </button>
                </div>
                <div className="offcanvas-body">
                  <div className="lift__side d-flex flex-column gap-5">
                    <form action="" className="position-relative">
                      <input
                        type="text"
                        className="w-100"
                        placeholder="Search Product"
                      />
                      <button className="filledBtn">
                        <Search size={20} />
                      </button>
                    </form>
                    <ul className="accordions">
                      <li>
                        <Categories />
                      </li>
                      <li>
                        <Price />
                      </li>
                      <li>
                        <Size />
                      </li>
                      <li>
                        <Color />
                      </li>
                      <li>
                        <Rating />
                      </li>
                      <li>
                        <Tags tags={tags} />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lift__side flex-column gap-5 d-none d-md-flex">
                <form action="" className="position-relative">
                  <input
                    value={searchValue}
                    type="text"
                    className="w-100"
                    placeholder="Search Product"
                    onChange={onChangeSearch}
                  />
                  <button className="filledBtn">
                    <Search size={20} />
                  </button>
                </form>
                <ul className="accordions">
                  <li>
                    <Categories />
                  </li>
                  <li>
                    <Price />
                  </li>
                  <li>
                    <Size />
                  </li>
                  <li>
                    <Color />
                  </li>
                  <li>
                    <Rating />
                  </li>
                  <li>
                    <Tags tags={tags} />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-8">
              <div className="right__side d-flex flex-column gap-5">
                <div className="filter_ways flex-wrap gap-3 d-flex justify-content-between align-items-center">
                  <div
                    className={`current__filters d-flex gap-3 flex-wrap align-items-center`}
                  >
                    {filters.length > 0 && (
                      <>
                        <h6 className="fw-normal">Selected Filters:</h6>
                        <ul className="filter_List d-flex gap-3 m-0">
                          {filters.map((item, index) => (
                            <li key={index} className="fs-6">
                              <div className="link text-dark">
                                {item}
                                <X size={26} onClick={() => removeFilter(index)}
                                />
                              </div>
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={() => setFilters([])}
                          className="clear_filters fs-6 bg-transparent border-0"
                        >
                          Clear All
                        </button>
                      </>
                    )}
                  </div>
                  <div className="filters flex-wrap d-flex gap-3 justify-content-end align-items-center">
                    <h6 className="fw-normal mt-1">
                      {`Showing ${DataItems.length} - ${recordPerPage} of ${6} results`}
                    </h6>
                    <div className="select border border-1 p-2 rounded">
                      <div className="selected" onClick={toggleList}>
                        <span className="h6 fw-normal"> Sort By date</span>
                        <span
                          className={`arrow px-2 ${toggle ? "rotate-180" : ""}`}
                        >
                          <ChevronDown size={12} />
                        </span>
                      </div>
                      <form action="" className={`${toggle ? "d-block" : ""}`}>
                        <input type="text" placeholder="..." />
                        <ul className="sort_lists mb-0">
                          <li>Sort By Date</li>
                          <li>Sort By Pupularity</li>
                          <li>Sort By Name</li>
                        </ul>
                      </form>
                    </div>
                    <button
                      className="virt_show custom-bar center"
                      onClick={(e) => handleLayout(e, "viritical")}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                    <button
                      className="hor_show center active-layout"
                      onClick={(e) => handleLayout(e, "horizontal")}
                    >
                      <BorderAll />
                    </button>
                  </div>
                </div>
                <div className="products mt-4 animate__slideDown">
                  {DataItems.length === 0 && <h5 className="primary-text-color text-center my-5">There is No items</h5>}
                  {layout == "horizontal" ? (
                    <div className="row">
                      {DataItems.map((item) => (
                        <div key={item.id} className="col-lg-6 col-xxl-4">
                          <div className="porduct mb-5 animate__slideDown">
                            <SingleProduct
                              product={item}
                              index={item.id}
                              flag="store"
                              name={item.name}
                              img={item.img}
                              sales={item.sales}
                              offer={item.offer}
                              price={item.price}
                              altPrice={item.altPrice}
                              rating={item.rating}
                              color={item.color}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      {DataItems.map((item, index) => (
                        <div key={index} className="animate__slideDown">
                          <VirticalItem
                            product={item}
                            name={item.name}
                            img={item.img}
                            sales={item.sales}
                            price={item.price}
                            altPrice={item.altPrice}
                            rating={item.rating}
                          />
                        </div>
                      ))}
                    </>
                  )}
                </div>
                <div className="pagination">
                  <ul className="d-flex gap-3">
                    {numbers.map((num) => (
                      <li key={num}>
                        <button
                          onClick={(e) => changePage(e, num)}
                          className={`${num === 1 ? "active-btn" : ""}`}
                        >
                          {num}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ShopContext.Provider>
  );
};

export default Shop;
