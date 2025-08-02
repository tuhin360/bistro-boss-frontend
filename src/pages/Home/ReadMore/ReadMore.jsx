import Cover from "../../Shared/Cover/Cover";
import contactImg from "../../../assets/contact/banner.jpg";
import FoodImg from "../../../assets/menu/salad-bg.jpg";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ReadMore = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Read More</title>
      </Helmet>
      <Cover
        img={contactImg}
        description={"Would you like to try a dish?"}
        title={" Bistro Boss Special"}
      />

      <SectionTitle
        heading={"Discover Our Bistro Boss"}
        subHeading={"Where Flavor Meets Tradition"}
      ></SectionTitle>

      <div className="flex flex-col md:flex-row items-center gap-6 max-w-5xl mx-auto px-4 py-8">
        <img
          src={FoodImg}
          alt="Featured Dish"
          className="w-full md:w-1/2 rounded-lg object-cover shadow-md"
          style={{ maxHeight: "350px" }}
        />

        <p className="md:w-1/2 text-gray-700 text-justify font-inter text-md">
          Welcome to Bistro Boss! Our signature dish combines the freshest
          ingredients with authentic flavors that will leave your taste buds
          craving for more. From farm-to-table freshness to mouth-watering
          spices, every bite is crafted with love and passion. Our chefs use
          traditional recipes blended with modern techniques to bring you a
          culinary experience unlike any other. Enjoy our cozy atmosphere,
          friendly staff, and a menu designed to satisfy every craving. Whether
          you're here for a quick bite or a celebration, Bistro Boss is the
          perfect place for food lovers.
        </p>
      </div>
    </div>
  );
};

export default ReadMore;
