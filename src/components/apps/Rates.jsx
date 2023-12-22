/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// ** Icons
import { useCallback, useContext, useEffect, useState } from 'react';
import { Star , StarFill} from 'react-bootstrap-icons'

// ** ginirate random key libirary
import { v4 as uuidv4 } from 'uuid';
import { ShopContext } from '../../pages/Shop';

const RateItem = ({starFill, id}) => {

    // ** vars
    let stars = [];
    const [isChecked,setIsChecked] = useState(false);
    const {filterdValue,setFilterdValue , setFilterType , filters , setFilters} = useContext(ShopContext);

   const getRate = useCallback(()=>{
    setIsChecked(!isChecked)
    if(!isChecked) {
    setFilterType('rating')
    setFilterdValue(starFill)}
  },[isChecked])

   useEffect(()=>{
    setFilters([...filters,filterdValue])
  },[filterdValue])

    // render star filled
    for (let i = 1; i < starFill + 1; i++) {
      stars.push(
        <span key={uuidv4()} className="text-warning mx-1">
          {<StarFill size={20} />}
        </span>
      );
    }

    // render starts not filled
    for (let i = starFill; i < 5; i++) {
      stars.push(
        <span key={uuidv4()} className="text-warning mx-1">
          {<Star size={20} />}
        </span>
      );
    }
    
    return (
      <div className="d-flex gap-3 my-2 align-items-center mb-4" onClick={getRate}>
        <input checked= {isChecked} onChange={(e)=>setIsChecked(e.target.checked)} type="radio" id={id} name="rate" className='border mt-1' style={{cursor:"pointer", width:"17px" , height:'17px'}}/>
        <label className='m-0' htmlFor={id} style={{cursor:'pointer'}}>{stars}</label>
      </div>
    );
  };
  
  const Rates = () => {
   

    return (
      <>
        <div className="mt-3">
            
          <RateItem starFill={5} id="one" />
          <RateItem starFill={4} id="two"  />
          <RateItem starFill={3} id="three" />
          <RateItem starFill={2} id="four" />
          <RateItem starFill={1} id="five" />
        </div>
      </>
    );
  };
  
  export default Rates;