/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// ** styles 
import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import '../../style/home.css'

const CategorySide = ({setCategory}) => {
  const {data,fetchData} = useFetch()

  useEffect(()=>{
    fetchData('http://localhost:3000/ProductCategories')
  },[])

    const setActiveTAb = (e)=>{
      setCategory(e.target.textContent)
        if(document.querySelector('.active-tap')) {
            document.querySelector('.active-tap').classList.remove('active-tap')
        }
        e.target.classList.add('active-tap')
    }
  return (
    <div>
      <ul className="categories">
        {data.map((item,index)=>(
          <li key={index} className={`${index===0?'active-tap':''}`} onClick={(e)=>setActiveTAb(e)}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySide;
