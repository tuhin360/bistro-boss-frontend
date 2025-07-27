import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";


const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  

  return (
    <section className="mb-12">
      <SectionTitle heading={"Our Popular Menu"} subHeading={"Check it out"} />
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/menu">
          <button className="btn btn-outline uppercase  text-black border-0 border-b-4 border-b-black md:hover:border-b-orange-500 md:hover:text-orange-500 font-inter md:text-lg">
            View Full Menu
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PopularMenu;
