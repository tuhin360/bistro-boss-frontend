const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mx-auto px-4 md:px-0 md:w-5/12 lg:w-4/12 my-8">
      <p className="text-[#D99904] italic text-sm md:text-base mb-3">
        --- {subHeading} ---
      </p>
      <h3 className="text-xl md:text-2xl lg:text-3xl border-y-2 md:border-y-4 py-2 md:py-4 uppercase font-semibold">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
