import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://bistro-boss-backend-rose.vercel.app/",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
