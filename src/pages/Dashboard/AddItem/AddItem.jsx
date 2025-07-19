import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { ImSpoonKnife } from "react-icons/im";

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <SectionTitle
        subHeading="What's new?"
        heading="Add an Item"
      ></SectionTitle>

      <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded shadow">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block font-medium mb-1">
              Recipe name<span className="text-red-500">*</span>
            </label>
            <input
              {...register("recipe", { required: true })}
              type="text"
              placeholder="Recipe name"
              className="input input-bordered w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">
                Category<span className="text-red-500">*</span>
              </label>
              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="">Category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drink">Drink</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">
                Price<span className="text-red-500">*</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Recipe Details<span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("details", { required: true })}
              placeholder="Recipe Details"
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>

          <div>
            <input
              {...register("image")}
              type="file"
              className="file-input file-input-bordered w-full"
            />
          </div>

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
