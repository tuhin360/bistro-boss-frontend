import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, description, img }) => {
  return (
    <div className="pt-10">
      {title && <Cover img={img} title={title} description={description} />}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center my-10">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline uppercase  text-black border-0 border-b-4 border-b-black md:hover:border-b-orange-500 md:hover:text-orange-500 ">
            Order Your Favorite Food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
