import axios from "axios";

const axiosPublic = axios.create({
   baseURL: "http://localhost:5000",
   // ToDo: uncomment for production
  // baseURL: "https://bistro-boss-backend-rose.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
