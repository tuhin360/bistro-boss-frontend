import React from "react";
import ChefService from "../../../assets/home/chef-service.jpg";

const Bistro = () => {
  return (
    <div className="relative">
      <img src={ChefService} alt="Chef Service" className="" />
      <div className="absolute top-1/2 left-1/2 w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 text-black text-center px-4 py-6 sm:py-10 rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Bistro Boss
        </h1>
        <p className="text-sm sm:text-base lg:text-lg f">
          Bistro Boss is a modern online food restaurant offering a wide range of delicious meals delivered straight to your doorstep.
        </p>
      </div>
    </div>
  );
};

export default Bistro;
