import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ChefRecommendCard from "./ChefRecommendCard";
import chefRecommendImg1 from "../../../assets/home/slide1.jpg";
import chefRecommendImg2 from "../../../assets/home/slide2.jpg";
import chefRecommendImg3 from "../../../assets/home/slide4.jpg";

const ChefRecommend = () => {
  const recommendations = [
    {
      title: "Caesar Salad",
      description: "Lettuce, Eggs, Parmesan,  Breast.",
      image: chefRecommendImg1,
    },
    {
      title: "Greek Pizza",
      description: "Cucumbers, Tomatoes, Feta Cheese, Onions.",
      image: chefRecommendImg2,
    },
    {
      title: "Chocolate Dessert",
      description: "Rich chocolate cake with a molten center.",
      image: chefRecommendImg3,
    },
  ];

  return (
    <div className="mb-20 px-4 md:px-8 lg:px-16">
      <SectionTitle
        heading={"Chef's Recommendation"}
        subHeading={"Should Try"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {recommendations.map((item, index) => (
          <ChefRecommendCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ChefRecommend;
