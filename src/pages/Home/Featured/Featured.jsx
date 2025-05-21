import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      className="relative text-white py-10 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${featuredImg})` }}
    >
      <div className="absolute inset-0 bg-slate-800/70 z-0"></div>

      <div className="relative z-10">
        <SectionTitle heading="Featured Menu" subHeading="Check it out" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 px-4 py-8">
        <img
          src={featuredImg}
          alt="Featured Item"
          className="w-full md:w-1/2 rounded shadow"
        />

        <div className="text-center md:text-left max-w-md space-y-3">
          <p className="text-sm text-gray-200">May 19, 2025</p>
          <h3 className="text-xl font-semibold uppercase text-gray-100">
            Where can I get some?
          </h3>
          <p className="text-gray-200 text-sm">
            Discover the best places to find what you're looking for, quickly
            and easily.
          </p>
         <button className="btn btn-outline uppercase  text-white border-0 border-b-4 hover:border-b-4 border-b-white md:hover:border-b-orange md:hover:text-white md:hover:bg-black">
          Read More
        </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
