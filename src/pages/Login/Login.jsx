import { useRef, useState, useEffect, useContext } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import authenticationImg from "../../assets/others/authentication.png";
import authenticationImg2 from "../../assets/others/authentication2.png";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log("state in the location login page", location.state);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = () => {
    const userCaptcha = captchaRef.current.value;
    setDisabled(!validateCaptcha(userCaptcha));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn(email, password);
      Swal.fire({
        title: "Login Successful",
        icon: "success",
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>

      {/* Main Wrapper with Background */}
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
        style={{
          backgroundImage: `url(${authenticationImg})`,
        }}
      >
        <div className=" shadow-2xl rounded-xl flex flex-col lg:flex-row max-w-5xl w-full overflow-hidden border border-gray-300 ">
          {/* Left Side Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center p-8 ">
            <img
              src={authenticationImg2}
              alt="Authentication Illustration"
              className="w-full max-w-xs"
            />
          </div>

          {/* Right Side Form */}
          <div className="w-full lg:w-1/2 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type here"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-orange-200"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-orange-200"
                  required
                />
              </div>

              {/* CAPTCHA */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  ref={captchaRef}
                  name="captcha"
                  placeholder="Type here"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
                  required
                  onBlur={handleValidateCaptcha}
                />
              </div>

              {/* Submit Button */}
              <input
                type="submit"
                disabled={disabled}
                value="Sign In"
                className={`w-full py-2 rounded-md text-white font-semibold transition duration-300 ${
                  disabled
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-orange-300 to-yellow-500 hover:from-orange-400 hover:to-yellow-600 hover:cursor-pointer"
                }`}
              />

              {/* Register Link */}
              <p className="text-sm text-center mt-4">
                New here?
                <Link
                  to="/signup"
                  className="text-orange-600 font-medium underline ml-1"
                >
                  Create a New Account
                </Link>
              </p>

              {/* Social Login */}
              <div className="divider">Or sign in with</div>
              <div className="flex justify-center gap-4">
                <Link to="#" className="btn btn-outline btn-circle">
                  <FaFacebookF />
                </Link>
                <Link to="#" className="btn btn-outline btn-circle">
                  <FaGoogle />
                </Link>
                <Link to="#" className="btn btn-outline btn-circle">
                  <FaGithub />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
