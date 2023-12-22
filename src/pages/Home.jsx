// ** components
import { BlogsSection, CollectionArea, FeaturedProduct, FlashProduct, Partiners, StoreSection, Testimonials } from "../components"
import DealWrapperSection from "../components/apps/DealWrapperSection"
import HomeCarousel from "../components/apps/HomeCarousel"
import { useBackToTop } from "../hooks/useBackToTop"

// ** hooks

const Home = () => {

  // ** Hooks
  useBackToTop()

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