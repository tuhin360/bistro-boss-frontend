import { Parallax } from "react-parallax";

const Cover = ({ img, title, description }) => {
  return (
    <Parallax
      blur={{ min: -20, max: 20 }}
      bgImage={img}
      bgImageAlt="cover image"
      strength={300}
    >
      <div className="relative h-[300px] md:h-[500px] lg:h-[700px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl  font-bold">
            {title}
          </h1>
          <p className="mb-5 text-sm md:text-base lg:text-lg">{description}</p>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
