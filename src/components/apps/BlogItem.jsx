// ** icons
import { Tag } from "react-bootstrap-icons";

// ** style import 
import '../../style/home.css'
const BlogItem = () => {
  return (
    <div className="">
      <div className="blog__img">
        <img
          src="https://hexfashion.xyz/assets/tenant/uploads/media-uploader/hexfashion/blog11665986714.jpg"
          alt=""
        />
      </div>
      <div className="blog__flag">
        <span>16</span>
        <span></span>
        <span>Nov</span>
      </div>
      <div className="blog__descreption mt-3">
        <h5>Do enjoyment defective objection or we if favourite</h5>
        <div className="blog__info d-flex gap-3 align-items-center mt-3">
          <span>
            <Tag color="#ff805d" /> Online Course
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
            <span className="me-2">0</span>
            Comments
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
