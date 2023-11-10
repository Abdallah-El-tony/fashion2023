// ** types import
import PropTypes from "prop-types";

const List = ({ type }) => {
  return (
    <div className="list">
      <p>No Item In {type}</p>
    </div>
  );
};
List.propTypes = {
  type: PropTypes.string.isRequired,
};
export default List;
