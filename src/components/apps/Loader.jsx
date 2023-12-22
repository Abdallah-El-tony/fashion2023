import '../../style/animations.css'
// ** redux
import {useSelector} from 'react-redux'
const Loader = () => {

    const {loader} = useSelector(state => state.Loader)
  return (
    <div className={`loader ${loader?'d-block':'d-none'}`}>
        <span className='loader__icon loader__icon--one'></span>
        <span className='loader__icon loader__icon--two'></span>
        <span className='loader__icon loader__icon--three'></span>
        <span className='loader__icon loader__icon--four'></span>
    </div>
  )
}

export default Loader