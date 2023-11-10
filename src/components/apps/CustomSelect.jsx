/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
//** styles */

import { useEffect, useState } from 'react'
import '../../style/regester.css'
const SelectBox = ({setCountry ,isSubmitted}) => {

  const [value , setValue] = useState('')
  const [error , setError] = useState(false)

  const onSelect = (e)=>{
    setCountry(e.target.value)
    setValue(e.target.value)
  }
  useEffect(()=>{
    if(isSubmitted) {
      if(value.length === 0) {
        setError(true)
      }else {
        setError(false)
      }
    }
   
  },[isSubmitted])

    return (
      <>
      <select name="country" className="form-input" onChange={onSelect} >
          <option value=""> Select Country</option>
          <option value="AF">Afghanistan</option>
          <option value="AL">Albania</option>
          <option value="DZ">Algeria</option>
          <option value="AR">Argentina</option>
          <option value="AU">Australia</option>
          <option value="AT">Austria</option>
          <option value="BD">Bangladesh</option>
          <option value="BE">Belgium</option>
          <option value="BR">Brazil</option>
          <option value="CA">Canada</option>
          <option value="CN">China</option>
          <option value="CO">Colombia</option>
          <option value="EG">Egypt</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
          <option value="IN">India</option>
          <option value="IT">Italy</option>
          <option value="JP">Japan</option>
          <option value="MX">Mexico</option>
          <option value="RU">Russia</option>
      </select>
      {error?(<p className='text-danger'>This field is Required</p>):(<></>)}
      </>
    )
  }
  
  export default SelectBox
  
  