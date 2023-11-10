
// ** components 
import CustomSlider from "./apps/CustomSlider"

const FeaturedProduct = () => {
  return (
    <div className="section">
        <div className="container">
            <h2 className="mb-5">Featured Products</h2>
           <CustomSlider type='featured'/>
        </div>
    </div>
  )
}

export default FeaturedProduct