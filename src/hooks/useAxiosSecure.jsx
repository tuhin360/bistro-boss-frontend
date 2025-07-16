import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  // request interceptor to add authorization header for every secure call to the api
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      console.log("Request stopped by interceptor", token);
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
        function (error) {
        // const status = error.response.status;
        console.log("Response error intercepted", error);



        // if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        //     console.error("Unauthorized or Forbidden request", error);
        //     // Handle unauthorized access, e.g., redirect to login
        // }
        return Promise.reject(error);
        }
    );




  return axiosSecure;
};

export default useAxiosSecure;
