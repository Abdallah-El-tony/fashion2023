// ** Components
import { Breadcrump } from "../components"

const OrderTrack = () => {

  
  return (
    <>
    <Breadcrump slug='Order Tracking'/>
    <section className='py-5'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-6">
            <div style={{boxShadow:"0 0 30px rgba(221, 221, 221, 0.3)",padding:'50px'}}>
              <h2>Order Tracking</h2>
              <p className='my-3'>To track your order please enter your Order ID in the box below and press the Track button. This was given to you on your receipt and in the confirmation email you should have received.</p>
              <form>
                <label className='mb-2 fw-semibold' htmlFor="track">Order ID</label>
                <input  id="track" type="text" placeholder='Example:125' className='w-100 px-2 border py-3 mb-3 ' />
                <input type="submit" className='filledBtn w-100' value='Track Now' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
   
  )
}

export default OrderTrack