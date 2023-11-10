// ** styles 
import '../../style/home.css'

const CategorySide = () => {

    const setActiveTAb = (e)=>{
        if(document.querySelector('.active-tap')) {
            document.querySelector('.active-tap').classList.remove('active-tap')
        }
        e.target.classList.add('active-tap')
    }
  return (
    <div>
      <ul className="categories">
        <li className="active-tap" onClick={(e)=>setActiveTAb(e)}>All Category</li>
        <li onClick={(e)=>setActiveTAb(e)}>Clothing</li>
        <li onClick={(e)=>setActiveTAb(e)}>Shoes</li>
        <li onClick={(e)=>setActiveTAb(e)}>Man</li>
        <li onClick={(e)=>setActiveTAb(e)}>Women</li>
      </ul>
    </div>
  );
};

export default CategorySide;
