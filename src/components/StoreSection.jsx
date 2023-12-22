
// ** style
import { useState } from 'react'
import '../style/home.css'
import CategorySide from './apps/CategorySide'
import ProductSide from './apps/ProductSide'

const StoreSection = () => {
    const [category, setCategory] = useState('All Category')
  return (
    <div className="section">
        <div className="container">
            <h2 className='title'>Our Store</h2>
            <div className="row">
                <div className="col-lg-3">
                    <CategorySide setCategory={setCategory}/>
                </div>
                <div className="col-lg-9">
                    <ProductSide category = {category}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StoreSection