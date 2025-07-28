import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://bistro-boss-backend-rose.vercel.app",
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  // request interceptor to add authorization header for every secure call to the api
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // console.log("Request stopped by interceptor", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // response 401 and 403 status
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      const status = error.response.status;
      // console.log("Response error intercepted", error);
      // if 401 or 403, log out user and redirect to login
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
