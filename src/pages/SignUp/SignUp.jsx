import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import authenticationImg from "../../assets/others/authentication.png";
import authenticationImg2 from "../../assets/others/authentication2.png";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        updateUserProfile(data.name, data.photoUrl)
          .then(() => {
            reset();
            Swal.fire({
              title: "Sign Up Successful",
              icon: "success",
              position: "top-end",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>

      {/* Patterned Background */}
      <div
        className="min-h-screen bg-gray-50 flex items-center justify-center px-4"
        style={{
          backgroundImage: `url(${authenticationImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="shadow-lg rounded-lg p-10 flex flex-col lg:flex-row items-center gap-10 max-w-5xl w-full border border-gray-300">
          
          {/* Form Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Type here"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-orange-200"
                />
                {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
              </div>

              {/* Photo URL */}
              <div>
                <label className="block text-sm font-medium mb-1">Photo URL</label>
                <input
                  type="text"
                  {...register("photoUrl", { required: true })}
                  placeholder="Photo URL"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-orange-200"
                />
                {errors.photoUrl && <p className="text-red-500 text-sm">Photo URL is required</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Type here"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-orange-200"
                />
                {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).*$/,
                  })}
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-orange-200"
                />
                {errors.password?.type === "required" && <p className="text-red-500 text-sm">Password is required</p>}
                {errors.password?.type === "minLength" && <p className="text-red-500 text-sm">Minimum 6 characters</p>}
                {errors.password?.type === "maxLength" && <p className="text-red-500 text-sm">Maximum 20 characters</p>}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500 text-sm">Must include uppercase, lowercase, number & special character</p>
                )}
              </div>

              {/* Submit */}
              <div>
                <input
                  type="submit"
                  value="Sign Up"
                  className="w-full bg-gradient-to-r from-amber-400 to-orange-400 hover:from-orange-400 hover:to-amber-500 text-white py-2 rounded-md font-semibold transition duration-300 hover:cursor-pointer"
                />
              </div>
            </form>

            {/* Redirect */}
            <p className="text-sm text-center mt-4">
              Already registered? 
              <Link to="/login" className="text-orange-600 font-bold underline ml-1">
                Go to log in
              </Link>
            </p>

            {/* Social Login */}
            <p className="text-sm text-center mt-6">Or sign up with</p>
            <div className="flex justify-center gap-4 mt-2">
              <button className="btn btn-outline btn-circle text-lg">
                <FaFacebookF />
              </button>
              <button className="btn btn-outline btn-circle text-lg">
                <FaGoogle />
              </button>
              <button className="btn btn-outline btn-circle text-lg">
                <FaGithub />
              </button>
            </div>
          </div>

          {/* Illustration Section */}
          <div className="w-full lg:w-1/2">
            <img src={authenticationImg2} alt="Signup Illustration" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
