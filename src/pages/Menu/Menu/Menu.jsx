import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import banner3Img from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
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
      <PopularMenu />
      <Cover
        img={banner3Img}
        title={"Our Menu"}
        description={"Would you like to try a dish?"}
      />
      <PopularMenu />
      <Cover
        img={banner3Img}
        title={"Our Menu"}
        description={"Would you like to try a dish?"}
      />
      <PopularMenu />
    </div>
  );
};

export default Menu;
