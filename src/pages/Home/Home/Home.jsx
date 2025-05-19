import Banner from "../Banner/Banner";
import Bistro from "../Bistro/Bistro";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
          <Banner/>
          <Category/>
          <Bistro/>
          <PopularMenu/>
        </div>
    );
};

export default Home;