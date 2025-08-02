import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ChefRecommendCard = ({ item }) => {
  const { title, description, image } = item;

  

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="card w-full max-w-sm bg-base-100 shadow-xl"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="300"
    >
      <figure>
        <img
          src={image}
          alt={title}
          className="w-full aspect-square object-cover rounded-t-lg shadow-md transform transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-lg md:text-xl">{title}</h2>
        <p className="text-sm md:text-base">{description}</p>
        <div className="card-actions">
          <button className="btn btn-outline uppercase text-orange-500 border-0 border-b-4 md:hover:bg-black md:hover:border-b-orange-500">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommendCard;
