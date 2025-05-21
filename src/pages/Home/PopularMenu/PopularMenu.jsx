import { useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useState } from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section className="mb-12">
      <SectionTitle heading={"Our Popular Menu"} subHeading={"Check it out"} />
      <div className="grid md:grid-cols-2 gap-10">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="btn btn-outline uppercase  text-black border-0 border-b-4 border-b-black md:hover:border-b-orange-500 md:hover:text-orange-500 ">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
