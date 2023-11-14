// ** images import 
import storyImg from '../../assets/story.jpg'

// ** components 
import Breadcrump from '../Breadcrump'

// ** styles 
import '../../style/about.css'

const AboutStory = () => {
  return (
    <div>
        <div className="container">
        <Breadcrump slug='About Us'/>
            <div className="row g-3 g-lg-5">
                <div className="col-md-12 col-lg-6">
                    <div className="about__img">
                        <img src={storyImg} alt="" />
                    </div>
                </div>
                <div className="col-md-12 col-lg-6">
                    <div className="about__text mt-0 mt-xl-5">
                        <h2 className='mx-2 mx-sm-0'>Our Story</h2>
                        <p className='mt-3 mx-2 mx-sm-0'>Mutley, you snickering, floppy eared hound. When courage is needed, you’re never around. Those medals you wear on your moth-eaten chest should be there for bungling at which you are best. So, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon. Howwww! Nab him, jab him, tab him, grab him, stop that pigeon now. Mutley, you snickering, floppy eared hound. When courage is needed, you’re never around. Those medals you wear on your moth-eaten chest should be there for bungling at which you are best. So, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon. Howwww! Nab him, jab him, tab him, grab him, stop that pigeon now.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutStory