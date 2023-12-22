/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useEffect } from "react"
import { colors } from "../../constants"

// ** styles 
import '../../style/shop.css'
import { ShopContext } from "../../pages/Shop"
const Colors = () => {
  const {filterdValue,setFilterdValue , setFilterType , filters , setFilters} = useContext(ShopContext);
  const getCurrentColor = useCallback((color)=>{ 
    setFilterdValue(color)
    setFilterType('color')
  },[])

  useEffect(()=>{
    setFilters([...filters,filterdValue])
  },[filterdValue])
  
  return (
    <div className="colors d-flex gap-2 flex-wrap">
        {colors.map((color,index)=>(
            <div className="color" key={index} onClick={()=>getCurrentColor(color.label)}>
                <span style={{backgroundColor:`${color.asci}`}}></span>
                <span>{color.label}</span>
            </div>
        ))}
    </div>
  )
}

export default Colors