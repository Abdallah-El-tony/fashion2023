// ** components
import { Testimonials } from "../components"
import AboutCounter from "../components/apps/AboutCounter"
import AboutStory from "../components/apps/AboutStory"
import Team from "../components/apps/Team"

const About = () => {
  return (
    <div>
        <AboutStory/>
        <AboutCounter/>
        <Testimonials/>
        <Team/>
    </div>
  )
}

export default About