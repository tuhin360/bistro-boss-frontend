import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { ImSpoonKnife } from "react-icons/im";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItem = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    // console.log(data);
    // image upload to imgbb and then get the URL
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image URL
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
      };

      const menuRes = await axiosSecure.post("/menu", menuItem);
      if (menuRes.data.insertedId) {
        Swal.fire({
          title: `${data.name} is added to the menu.`,
          icon: "success",
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      } else {
        Swal.fire({
          title: "Failed to Add Item",
          icon: "error",
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }

    // console.log(res.data);
  };

  return (
    <>
      <SectionTitle
        subHeading="What's new?"
        heading="Add an Item"
      ></SectionTitle>

      <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded shadow">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Recipe Name */}
          <div>
            <label className="block font-medium mb-1">
              Recipe name<span className="text-red-500">*</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe name"
              className="input input-bordered w-full focus:outline-none focus:ring focus:ring-orange-200"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                Recipe name is required
              </p>
            )}
          </div>

          {/* Category & Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Category */}
            <div>
              <label className="block font-medium mb-1">
                Category<span className="text-red-500">*</span>
              </label>
              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full focus:outline-none focus:ring focus:ring-orange-200"
              >
                <option value="">Category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drink">Drink</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">
                  Category is required
                </p>
              )}
            </div>

            {/* Price */}
            <div>
              <label className="block font-medium mb-1">
                Price<span className="text-red-500">*</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full focus:outline-none focus:ring focus:ring-orange-200"
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">Price is required</p>
              )}
            </div>
          </div>

          {/* Recipe Details */}
          <div>
            <label className="block font-medium mb-1">
              Recipe Details<span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              placeholder="Recipe Details"
              className="textarea textarea-bordered w-full focus:outline-none focus:ring focus:ring-orange-200"
            ></textarea>
            {errors.recipe && (
              <p className="text-red-500 text-sm mt-1">
                Recipe details are required
              </p>
            )}
          </div>

          {/* Image */}
          <div>
            <label className="block font-medium mb-1">
              Upload Image<span className="text-red-500">*</span>
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full focus:outline-none focus:ring focus:ring-orange-200"
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">Image is required</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="btn bg-amber-700 text-white hover:bg-amber-800"
            >
              Add Item <ImSpoonKnife />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddItem;
