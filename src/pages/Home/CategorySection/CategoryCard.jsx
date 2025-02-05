import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CategoryCard = ({ category }) => {
  const { category_name, image_url } = category;

  return (
    <Link to={`/catagoryDetails/${category_name}`}>
      <div className="card bg-base-100 border border-green-600">
        <figure className="relative h-52">
          <img
            src={image_url}
            alt="Shoes"
            className=" w-full h-full object-cover  hover:scale-110 duration-200"
          />
        </figure>
        <div className="pb-4">
          <h2 className="text-center font-bold mt-4">{category_name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;

CategoryCard.propTypes = {
  category: PropTypes.object,
};
