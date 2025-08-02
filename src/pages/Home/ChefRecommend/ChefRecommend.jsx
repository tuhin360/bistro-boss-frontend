import FoodCard from "../../../components/FoodCard/FoodCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const ChefRecommend = () => {

  const [menu] = useMenu();
  
  const ChefRecommend = menu.filter((item) => item.category === "chef recommend");

  return (
    <div className="mb-20 px-4 md:px-8 lg:px-16">
      <SectionTitle
        heading={"Chef's Recommendation"}
        subHeading={"Should Try"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {ChefRecommend.map((item, index) => (
          <FoodCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ChefRecommend;
