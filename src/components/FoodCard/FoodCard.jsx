import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { image, name, price, recipe } = item;
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    if (user && user.email) {
      // TODO: send cart data to the database
    } else {
      Swal.fire({
        title: "You are not logged In!",
        text: "Please Login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // send user to login page
          navigate("/login");
        }
      });
    }
    // console.log("Item added to cart:", item, user.email);
  };

  return (
    <div className="card w-full max-w-[90%] sm:max-w-xs md:max-w-sm lg:max-w-md bg-base-100 shadow-xl hover:shadow-xl transition-shadow duration-300 my-4 md:my-6">
      <div className="relative">
        <img
          src={image}
          alt="img"
          className="w-full h-48 sm:h-52 md:h-64 object-cover rounded-t-lg"
        />
        <span className="absolute top-0 right-0 bg-black text-white px-2 py-1 rounded-md mr-2 mt-2">
          ${price}
        </span>
      </div>
      <div className="card-body items-center text-center ">
        <h2 className="card-title text-base sm:text-lg md:text-xl font-semibold">
          {name}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-600">
          {recipe}
        </p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline uppercase text-orange-500 border-0 border-b-4 md:hover:bg-black md:hover:border-b-black transition duration-200"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
