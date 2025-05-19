const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;

  return (
    <div className="flex flex-col md:flex-row md:items-start items-center gap-4 p-4 border-b">
      {/* Image */}
      <img
        className="w-[100px] h-[100px] object-cover rounded-[0_200px_200px_200px]"
        src={image}
        alt={name}
      />

      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="uppercase font-semibold text-lg md:text-xl mb-1">
          {name} <span className="hidden md:inline">----------</span>
        </h3>
        <p className="text-sm text-gray-600">{recipe}</p>
      </div>

      {/* Price */}
      <p className="text-[#BB8506] font-bold">${price}</p>
    </div>
  );
};

export default MenuItem;
