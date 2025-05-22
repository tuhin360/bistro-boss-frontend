import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import banner3Img from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={banner3Img}
        title={"Our Menu"}
        description={"Would you like to try a dish?"}
      />
      {/* main cover */}

      <SectionTitle
        heading={"Today's Offer"}
        subHeading={"Don't miss"}
      ></SectionTitle>

      {/*offered menu items*/}
      <MenuCategory
        items={offered}
        title={"offered"}
        description={"let's try something new"}
        img={pizzaImg}
      ></MenuCategory>

      {/*dessert menu items*/}
      <MenuCategory
        items={dessert}
        title={"dessert"}
        description={
          "Indulge your sweet tooth with our delightful desserts. From cakes to pastries, every bite is a treat!"
        }
        img={dessertImg}
      ></MenuCategory>

      {/*pizza menu items*/}
      <MenuCategory
        items={pizza}
        title={"pizza"}
        description={
          "Enjoy oven-fresh pizzas loaded with cheese and toppings. Every slice is crafted to satisfy your cravings."
        }
        img={pizzaImg}
      ></MenuCategory>

      {/*salad menu items*/}
      <MenuCategory
        items={salad}
        title={"salad"}
        description={"Enjoy our crisp, healthy, and refreshing salads."}
        img={saladImg}
      ></MenuCategory>

      {/*soup menu items*/}
      <MenuCategory
        items={soup}
        title={"soup"}
        description={"Warm up with our comforting and flavorful soups."}
        img={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
