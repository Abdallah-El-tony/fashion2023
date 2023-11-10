import CustomSlider from "./apps/CustomSlider"

const BlogsSection = () => {
  return (
    <div className="section mt-4 mt-lg-0">
        <div className="container">
            <h2 className="h2 mb-5">Blog Updates</h2>
            <CustomSlider type='blogs'/>
        </div>
    </div>
  )
}

export default BlogsSection