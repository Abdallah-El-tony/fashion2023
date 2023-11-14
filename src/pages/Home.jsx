// ** components
import { BlogsSection, CollectionArea, FeaturedProduct, FlashProduct, Partiners, StoreSection, Testimonials } from "../components"
import DealWrapperSection from "../components/apps/DealWrapperSection"
import HomeCarousel from "../components/apps/HomeCarousel"

// ** hooks

const Home = () => {

  // ** Hooks

  return (
    <>
      <HomeCarousel/>
      <FeaturedProduct/>
      <CollectionArea/>
      <StoreSection/>
      <DealWrapperSection/>
      <FlashProduct/>
      <Testimonials type='home'/>
      <BlogsSection/>
      <Partiners/>

    </>
  )
}

export default Home