// ** components
import CustomSlider from "../components/apps/CustomSlider";
import Tabs from "../components/apps/Tabs";
import ViewProduct from "../components/apps/ViewProduct";

const ProductDetails = () => {
  return (
    <div>
      <ViewProduct />
      <Tabs />
      <div className="container">
        <h2 className="mb-5">Featured Products</h2>
        <CustomSlider type="featured" />
      </div>
    </div>
  );
};

export default ProductDetails;
