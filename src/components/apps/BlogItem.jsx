/* eslint-disable react/prop-types */
// ** icons
import { Tag } from "react-bootstrap-icons";

// ** style import 
import '../../style/home.css'
const BlogItem = ({img,name,category,date,comments}) => {
  return (
    <div className="position-relative">
      <div className="blog__img">
        <img
          src={img}
          alt=""
        />
      </div>
      <div className="blog__flag">
        <span>{date}</span>
        <span></span>
        <span>Nov</span>
      </div>
      <div className="blog__descreption mt-3">
        <h5>{name}</h5>
        <div className="blog__info d-flex gap-3 align-items-center mt-3">
          <span>
            <Tag color="#ff805d" /> {category}
          </span>
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              display: "inline-block",
              background: "#ff805d",
            }}
          ></span>
          <div className="comments">
            <span className="me-2">{comments}</span>
            Comments
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
