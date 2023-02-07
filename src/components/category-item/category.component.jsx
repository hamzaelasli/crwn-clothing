// import { Link } from "react-router-dom";
import "./category.styles.scss";
const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="category--container large">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="category--body-container">
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
