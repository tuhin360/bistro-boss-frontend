import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <p className="text-center">Loading payment history...</p>;
  }

  return (
    <div>
      <SectionTitle
        heading={"Payment History"}
        subHeading={"At a Glance!"}
      ></SectionTitle>

      <div className="bg-white shadow-md rounded p-4 max-w-5xl mx-auto">
        <h3 className="text-3xl font-cinzel font-bold mb-4">
          Total Payments: {payments.length}
        </h3>

        <div className="overflow-x-auto">
          <table className="table table-zebra w-full border">
            <thead>
              <tr className="bg-yellow-600 text-white">
                <th className="px-4 py-2 text-left rounded-tl-md font-inter font-semibold text-base">Email</th>
                <th className="px-4 py-2 text-left rounded-tl-md font-inter font-semibold text-base">
                  Transaction ID
                </th>
                <th className="px-4 py-2 text-left rounded-tl-md font-inter font-semibold text-base">Status</th>
                <th className="px-4 py-2 text-left font-inter font-semibold text-base">Category</th>
                <th className="px-4 py-2 text-left font-inter font-semibold text-base">Total Price</th>
                <th className="px-4 py-2 text-left rounded-tr-md font-inter font-semibold text-base">
                  Payment Date
                </th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-4 font-inter font-normal text-base">{payment.email}</td>
                  <td className="px-4 py-4 font-inter font-normal text-base">{payment.transactionId}</td>
                  <td className="px-4 py-4 font-inter font-normal text-base">{payment.status}</td>
                  <td className="px-4 py-2 font-inter font-normal text-base">Food Order</td>
                  <td className="px-4 py-2 font-inter font-normal text-base">${payment.price.toFixed(2)}</td>
                  <td className="px-4 py-2 font-inter font-normal text-base">
                    {new Date(payment.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
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

export default PaymentHistory;
