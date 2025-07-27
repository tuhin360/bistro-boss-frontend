import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const data = useLoaderData(); // fetched menu item
  console.log("UpdateItem data:", data);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (formData) => {
    let imageUrl = data.image;
    // console.log("Previous image URL:", imageUrl);

    if (formData.image && formData.image.length > 0) {
      // console.log("User selected a new image:", formData.image[0]);
      const formDataObj = new FormData();
      formDataObj.append("image", formData.image[0]);
      // console.log("Image in FormData:", formDataObj.get("image"));

      const res = await axiosPublic.post(image_hosting_api, formDataObj);
      // console.log("imgbb API response:", res.data);
      if (res.data.success) {
        imageUrl = res.data.data.display_url;
        //  console.log("New image URL:", imageUrl);
      }
      //   console.log("Final imageUrl to update:", imageUrl);
    }

    const updatedItem = {
      name: formData.name,
      category: formData.category,
      price: parseFloat(formData.price),
      recipe: formData.recipe,
      image: imageUrl,
    };

    const response = await axiosSecure.patch(`/menu/${data._id}`, updatedItem);

    if (response.data.modifiedCount > 0) {
      Swal.fire("Success", "Item updated!", "success");
    } else {
      Swal.fire("Error", "Failed to update item", "error");
    }
  };

  return (
    <>
      <SectionTitle subHeading="Update your menu" heading="Update Item" />
      <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded shadow">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Recipe name */}
          <div>
            <label className="font-inter font-semibold text-xl">
              Recipe name*
            </label>
            <input
              {...register("name", { required: true })}
              defaultValue={data.name}
              className="input input-bordered w-full focus:outline-none focus:ring focus:ring-orange-200 font-inter text-xl font-normal text-[#A1A1A1]"
            />
          </div>

          {/* Category & Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-inter font-semibold text-xl">
                Category*
              </label>
              <select
                {...register("category", { required: true })}
                defaultValue={data.category}
                className="select select-bordered w-full focus:outline-none focus:ring focus:ring-orange-200 font-inter text-xl font-normal text-[#A1A1A1]"
              >
                <option value="">Select Category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drink">Drink</option>
              </select>
            </div>

            <div>
              <label className="font-inter font-semibold text-xl">Price*</label>
              <input
                type="number"
                step="0.01"
                {...register("price", { required: true })}
                defaultValue={data.price}
                className="input input-bordered w-full focus:outline-none focus:ring focus:ring-orange-200 font-inter text-xl font-normal  text-[#A1A1A1]"
              />
            </div>
          </div>

          {/* Recipe Details */}
          <div>
            <label className="font-inter font-semibold text-xl">
              Recipe Details*
            </label>
            <textarea
              {...register("recipe", { required: true })}
              defaultValue={data.recipe}
              className="textarea textarea-bordered w-full focus:outline-none focus:ring focus:ring-orange-200 font-inter text-xl font-normal text-[#A1A1A1]"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="font-inter font-semibold text-xl">
              Image (optional)
            </label>
            <input
              type="file"
              {...register("image")}
              accept="image/*"
              className="file-input file-input-bordered w-full focus:outline-none focus:ring focus:ring-orange-200 font-inter text-xl font-normal text-[#A1A1A1]"
            />
          </div>
          <div className=" flex justify-center">
            <button
              type="submit"
              className="btn bg-amber-700 text-white hover:bg-amber-800 text-center font-inter text-xl font-bold"
            >
              Update Recipe Details
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateItem;
