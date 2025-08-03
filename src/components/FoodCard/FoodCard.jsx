import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FoodCard = ({ item }) => {
  const { image, name, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      // send cart item data to the database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name: name,
        image: image,
        price: price,
      };
      axiosSecure
        .post("/carts", cartItem)
        .then((response) => {
          if (response.data.insertedId) {
            Swal.fire({
              title: `${name} Added to Cart`,
              text: "You can view your cart to proceed with the order.",
              icon: "success",
              confirmButtonText: "OK",
            });
          }
          refetch(); // refetch the cart to update the cart item count
        })
        .catch((error) => {
          console.error(
            "There was an error adding the item to the cart!",
            error
          );
          Swal.fire({
            title: "Error",
            text: "There was an error adding the item to the cart. Please try again later.",
            icon: "error",
            confirmButtonText: "OK",
          });
        });
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
          navigate("/login", { state: { from: location } });
        }
      });
    }
    // console.log("Item added to cart:", item, user.email);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="card w-full max-w-[90%] sm:max-w-xs md:max-w-sm lg:max-w-md bg-base-100 shadow-md hover:shadow-2xl  transition-shadow duration-300 my-4 md:my-6"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="300"
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={`Image of ${name}`}
          className="w-full h-48 sm:h-52 md:h-64 object-cover transition-transform duration-500 md:hover:scale-105"
          data-aos-delay="150"
        />
        <span className="absolute top-0 right-0 bg-black text-white px-2 py-1 rounded-md mr-2 mt-2 font-inter text-base">
          ${price}
        </span>
      </div>
      <div className="card-body items-center text-center ">
        <h2 className="card-title text-base sm:text-lg md:text-2xl font-semibold font-inter">
          {name}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#737373] font-inter">
          {recipe}
        </p>
        <div className="card-actions">
          <button
            onClick={handleAddToCart}
            className="btn btn-outline uppercase text-[#BB8506] border-0 border-b-4 hover:border-[#BB8506] hover:bg-[#1e1e1e] hover:text-white"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
