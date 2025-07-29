import { useState } from "react";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import Swal from "sweetalert2";
import { RxRocket } from "react-icons/rx";
import { FaStar, FaRegStar } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure"; // Optional: if you're using secure axios
import useAuth from "../../../hooks/useAuth";

const AddReview = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [rating, setRating] = useState(0);

  const onSubmit = async (data) => {
    const review = {
      name: user?.displayName || "Anonymous",
      recipe: data.recipe,
      suggestion: data.suggestion,
      details: data.review,
      rating,
    };

    try {
      const res = await axiosSecure.post("/reviews", review);
      if (res.data.insertedId) {
        Swal.fire({
          title: "Thank You!",
          text: "Your review has been submitted.",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "Close",
      });
    }
  };

  return (
    <div className="bg-gray-100 py-10 px-4">
      <SectionTitle
        heading={"Give a Review"}
        subHeading={"Your Feedback Matters!"}
      />

      <div className="max-w-4xl mx-auto my-6 text-center">
        <h3 className="text-3xl font-cinzel">Rate Us!</h3>
        <div className="mt-4 flex justify-center">
          <Rating
            initialRating={rating}
            emptySymbol={<FaRegStar className="text-4xl text-orange-300" />}
            fullSymbol={<FaStar className="text-4xl text-orange-500" />}
            onChange={(value) => setRating(value)}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-10 rounded shadow">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
          {/* Recipe Input */}
          <div>
            <label className="block mb-2 font-inter text-xl font-semibold">
              Which recipe you liked most?
            </label>
            <input
              {...register("recipe", { required: true })}
              type="text"
              placeholder="Recipe you liked most"
              className="input input-bordered w-full px-5 py-6 font-inter text-xl focus:outline-none focus:ring focus:ring-orange-200"
            />
            {errors.recipe && (
              <p className="text-red-500 text-sm mt-1 font-inter">
                Recipe is required
              </p>
            )}
          </div>

          {/* Suggestion Input */}
          <div>
            <label className="block mb-2 font-inter text-xl font-semibold">
              Do you have any suggestion for us?
            </label>
            <input
              {...register("suggestion", { required: true })}
              type="text"
              placeholder="Suggestion"
              className="input input-bordered w-full px-5 py-6 font-inter text-xl focus:outline-none focus:ring focus:ring-orange-200"
            />
            {errors.suggestion && (
              <p className="text-red-500 text-sm mt-1 font-inter">
                Suggestion is required
              </p>
            )}
          </div>

          {/* Review Textarea */}
          <div>
            <label className="block mb-2 font-inter text-xl font-semibold">
              Kindly express your care about us in a message?
            </label>
            <textarea
              {...register("review", { required: true })}
              placeholder="Review in Details"
              className="textarea textarea-bordered w-full px-5 py-6 h-36 font-inter text-xl focus:outline-none focus:ring focus:ring-orange-200 resize-none"
            ></textarea>
            {errors.review && (
              <p className="text-red-500 text-sm mt-1 font-inter">
                Review details are required
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="btn text-white font-inter text-xl font-semibold px-6 py-6 hover:opacity-90 transition"
              style={{
                backgroundImage: "linear-gradient(to right, #835D23, #B58130)",
              }}
            >
              Send Review <RxRocket className="ml-2 text-2xl" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
