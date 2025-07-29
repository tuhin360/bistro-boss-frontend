import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const ManageBookings = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: payments = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      // console.log(res.data);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="w-16 h-16 border-4 border-t-transparent border-purple-500 rounded-full animate-spin shadow-lg"></div>
      </div>
    );
  }

  const handleStatusUpdate = async (id) => {
    try {
      const res = await axiosSecure.put(`/payments/${id}`, {
        status: "done",
      });
      if (res.data.modifiedCount > 0) {
        Swal.fire("Success", "Status updated to Done!", "success");
        refetch();
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to update status", "error");
    }
  };

  return (
    <div className="bg-gray-100 p-10 rounded-lg shadow-md min-h-screen">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded shadow">
        <SectionTitle heading="Manage All Bookings" subHeading="At a Glance!" />
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide font-cinzel mb-4">
          Total Items: {payments.length}
        </h2>

        <div className="overflow-x-auto w-full mt-6">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="bg-[#D99904] text-white ">
                <th className="rounded-tl-lg font-inter font-semibold text-base ">
                  No
                </th>
                <th className="font-inter font-semibold text-base">
                  User Email
                </th>
                <th className="font-inter font-semibold text-base">Date</th>
                <th className="font-inter font-semibold text-base">Time</th>
                <th className="font-inter font-semibold text-base">Activity</th>
                <th className="rounded-tr-lg font-inter font-semibold text-base">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment._id}>
                  <td className="font-inter font-bold text-xl">{index + 1}</td>
                  <td className="font-inter font-normal text-base">
                    {payment.email}
                  </td>
                  <td className="font-inter font-normal text-base">
                    {new Date(payment.date).toLocaleDateString()}
                  </td>
                  <td className="font-inter font-normal text-base">
                    {new Date(payment.date).toLocaleTimeString()}
                  </td>

                  <td className="font-inter font-normal capitalize text-base">
                    {payment.status}
                  </td>
                  <td>
                    <button
                      onClick={() => handleStatusUpdate(payment._id)}
                      disabled={payment.status === "done"}
                      className={`flex items-center justify-center w-14 h-14 transition-all duration-300 rounded-full text-white shadow-md ${
                        payment.status === "done"
                          ? "bg-green-700 cursor-not-allowed opacity-80"
                          : "bg-orange-500 hover:bg-green-600 hover:scale-110"
                      }`}
                      title={
                        payment.status === "done"
                          ? "Already Done"
                          : "Mark as Done"
                      }
                    >
                      <TiTick className="text-white text-2xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageBookings;
