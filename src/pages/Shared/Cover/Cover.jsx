import { Parallax } from "react-parallax";

const Cover = ({ img, title, description }) => {
  return (
    <Parallax
      blur={{ min: -20, max: 20 }}
      bgImage={img}
      bgImageAlt="cover image"
      strength={300}
    >
      <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] flex items-center justify-center">
        <div
          className="
    absolute z-0 rounded-md
    bg-black bg-opacity-50
    inset-0 
    sm:left-1/2 sm:top-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2
    sm:w-8/12 sm:h-1/2
  "
        ></div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="mb-5 text-2xl  md:text-4xl lg:text-5xl uppercase  font-bold">
            {title}
          </h1>
          <p className=" mb-5 text-sm md:text-base lg:text-lg ">
            {description}
          </p>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
