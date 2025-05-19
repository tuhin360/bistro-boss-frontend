import React from "react";

const ChefRecommendCard = ({ item }) => {
  const { title, description, image } = item;

  return (
    <div className="card w-full max-w-sm bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={title} className="w-full aspect-square overflow-hidden" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-lg md:text-xl">{title}</h2>
        <p className="text-sm md:text-base">{description}</p>
        <div className="card-actions">
          <button className="btn btn-outline uppercase text-orange-500 border-0 border-b-4 hover:bg-black">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommendCard;
