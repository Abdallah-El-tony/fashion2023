// ** react counterup 
import CountUp from "react-countup"

// ** styels
import '../../style/about.css'
const AboutCounter = () => {
  return (
    <div className="section mb-5">
        <div className="container">
            <div className="row counters mx-2 mx-sm-0">
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="counter mt-4">
                        <div className="counter__progress">
                            <CountUp start={0} end={650} duration={5} /> +
                        </div>
                        <p className="pt-3 fs-5">Total Product</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="counter mt-4">
                        <div className="counter__progress">
                            <CountUp start={0} end={1500} duration={5} /> +
                        </div>
                        <p className="pt-3 fs-5">Total Variant</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="counter mt-4">
                        <div className="counter__progress">
                            <CountUp start={0} end={500} duration={5} /> +
                        </div>
                        <p className="pt-3 fs-5">Total User</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="counter mt-4">
                        <div className="counter__progress">
                            <CountUp start={0} end={1200} duration={5} /> +
                        </div>
                        <p className="pt-3 fs-5">Total Sell</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutCounter