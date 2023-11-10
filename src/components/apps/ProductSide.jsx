// ** styles import
import '../../style/home.css'

// ** components
import SingleProduct from './SingleProduct'

import {motion} from 'framer-motion'

const ProductSide = () => {

    const variants = {
        hidden: {
            y:-200,
            opacity:0
        },
        visible:{
            y:0,
            opacity:1,
            transition:{
                duration:1
            }
        }
    }
  return (
    <motion.div
    variants={variants}
    initial='hidden'
    animate='visible'
     className="products__container">
        <div className="row">
            <div className="col-md-6 col-xl-4">
                <SingleProduct flag='store'/>
            </div>
            <div className="col-md-6 col-xl-4">
                <SingleProduct flag='store'/>
            </div>
            <div className="col-md-6 col-xl-4">
                <SingleProduct flag='store'/>
            </div>
            <div className="col-md-6 col-xl-4">
                <SingleProduct flag='store'/>
            </div>
            <div className="col-md-6 col-xl-4">
                <SingleProduct flag='store'/>
            </div>
            <div className="col-md-6 col-xl-4">
                <SingleProduct flag='store'/>
            </div>
        </div>
    </motion.div>
  )
}

export default ProductSide