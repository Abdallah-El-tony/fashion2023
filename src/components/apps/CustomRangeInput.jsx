import { useState } from 'react';
import Slider from 'react-slider'
import '../../style/shop.css'

const MIN = 0;
const MAX = 10000;
const CustomRangeInput = () => {

  const [values,setValues] = useState([MIN,MAX])

  console.log('values',values)
  return (
    <div>
        <Slider className='slider'
          onChange={setValues}
          value={values}
          min={MIN}
          max={MAX}
      />
    </div>
        
  )
}

export default CustomRangeInput