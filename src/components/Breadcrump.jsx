import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Breadcrump = ({slug}) => {
  return (
    <div className="py-4 text-center mt-3 mb-5" style={{backgroundColor:'#fff6ee'}}>
      <div className="title">
        <h2 className="h2">{slug}</h2>
      </div>
      <div className="breadcrump mt-1">
        <Link to='/'>Home</Link>
        <span>  |  </span>
        <a>{slug}</a>
      </div>
    </div>
  );
};

export default Breadcrump;
