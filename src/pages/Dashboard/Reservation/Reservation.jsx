import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Reservation = () => {
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axiosPublic.post("/reservations", data);
      if (res.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Your table has been booked.",
          icon: "success",
          confirmButtonText: "OK",
        });
        reset();
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div className="bg-gray-100 py-10 px-4">
      <SectionTitle heading="Book a Table" subHeading="Make a Reservation" />
      <div className="max-w-4xl mx-auto bg-white p-10 rounded shadow">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Date */}
            <div>
              <label className="block mb-2 font-inter text-xl font-semibold">
                Date*
              </label>
              <input
                {...register("date", { required: true })}
                type="date"
                className="input input-bordered w-full px-5 py-6 font-inter text-xl focus:outline-none focus:ring focus:ring-orange-200"
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1 font-inter">
                  Date is required
                </p>
              )}
            </div>

            {/* Time */}
            <div>
              <label className="block mb-2 font-inter text-xl font-semibold">
                Time*
              </label>
              <input
                {...register("time", { required: true })}
                type="time"
                className="input input-bordered w-full px-5 py-6 font-inter text-xl focus:outline-none focus:ring focus:ring-orange-200"
              />
              {errors.time && (
                <p className="text-red-500 text-sm mt-1 font-inter">
                  Time is required
                </p>
              )}
            </div>

            {/* Guest */}
            <div>
              <label className="block mb-2 text-lg font-semibold">Guest*</label>
              <input
                {...register("guest", {
                  required: true,
                  min: 1,
                  max: 100,
                })}
                type="number"
                placeholder="1 Person"
                className="w-full px-4 py-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-200 text-base"
              />

              {errors.guest && errors.guest.type === "required" && (
                <p className="text-red-500 text-sm mt-1">
                  Guest count is required
                </p>
              )}
              {errors.guest && errors.guest.type === "min" && (
                <p className="text-red-500 text-sm mt-1">
                  Minimum 1 guest required
                </p>
              )}
              {errors.guest && errors.guest.type === "max" && (
                <p className="text-red-500 text-sm mt-1">
                  Maximum 100 guests allowed
                </p>
              )}
            </div>

            {/* Name */}
            <div>
              <label className="block mb-2 font-inter text-xl font-semibold">
                Name*
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full px-5 py-6 font-inter text-xl focus:outline-none focus:ring focus:ring-orange-200"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1 font-inter">
                  Name is required
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 font-inter text-xl font-semibold">
                Phone*
              </label>
              <input
                {...register("phone", { required: true })}
                type="text"
                placeholder="Phone Number"
                className="input input-bordered w-full px-5 py-6 font-inter text-xl focus:outline-none focus:ring focus:ring-orange-200"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1 font-inter">
                  Phone number is required
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-inter text-xl font-semibold">
                Email*
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full px-5 py-6 font-inter text-xl focus:outline-none focus:ring focus:ring-orange-200"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 font-inter">
                  Email is required
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="md:col-span-3 flex justify-center mb-6 mt-4">
              <button
                type="submit"
                className="btn text-white font-inter text-xl font-semibold px-6 py-6 hover:opacity-90 transition"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #835D23, #B58130)",
                }}
              >
                Book A Table <FaCalendarAlt className="ml-2 text-xl" />
              </button>
            </div>
          </div>
        </form>

        {/* Location Info */}
        <SectionTitle heading="Our Location" subHeading="Visit Us" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-16">
          {/* Phone */}
          <div className="border border-gray-300 border-l-2 border-r-2 border-b-2 rounded-md">
            <div className="flex justify-center items-center text-white text-3xl bg-[#D1A054] rounded-t-md h-[70px]">
              <MdOutlinePhoneInTalk />
            </div>
            <div className="flex flex-col justify-center items-center text-center bg-[#F3F3F3] mx-4 md:mx-6 mb-6 h-[250px] px-4">
              <h3 className="uppercase text-xl md:text-2xl font-bold mb-2 font-inter">
                Phone
              </h3>
              <p className="font-inter text-base">+880 1234567890</p>
            </div>
          </div>

          {/* Address */}
          <div className="border border-gray-300 border-l-2 border-r-2 border-b-2 rounded-md">
            <div className="flex justify-center items-center text-white text-3xl bg-[#D1A054] rounded-t-md h-[70px]">
              <FaLocationDot />
            </div>
            <div className="flex flex-col justify-center items-center text-center bg-[#F3F3F3] mx-4 md:mx-6 mb-6 h-[250px] px-4">
              <h3 className="uppercase text-xl md:text-2xl font-bold mb-2 font-inter">
                Address
              </h3>
              <p className="font-inter text-base">
                123 ABS Street, Uni 21, Bangladesh
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="border border-gray-300 border-l-2 border-r-2 border-b-2 rounded-md">
            <div className="flex justify-center items-center text-white text-3xl bg-[#D1A054] rounded-t-md h-[70px]">
              <FaClock />
            </div>
            <div className="flex flex-col justify-center items-center text-center bg-[#F3F3F3] mx-4 md:mx-6 mb-6 h-[250px] px-4">
              <h3 className="uppercase text-xl md:text-2xl font-bold mb-2 font-inter">
                Working Hours
              </h3>
              <p className="font-inter text-base">Mon - Fri: 08:00 - 22:00</p>
              <p className="font-inter text-base">Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
