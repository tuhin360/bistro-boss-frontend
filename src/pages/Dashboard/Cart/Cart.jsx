import { FaTrash } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this item from your cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/carts/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
              refetch();
            }
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
            Swal.fire({
              title: "Error!",
              text: "There was an error deleting the item.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen px-2">
      <div className="-mt-8">
        <SectionTitle
          heading={"Wanna Add More"}
          subHeading={"My Cart"}
        ></SectionTitle>
      </div>

      {/* Summary */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-4">
        <h2 className="text-lg md:text-3xl font-bold text-center uppercase font-cinzel">
          Total Orders: {cart.length}
        </h2>
        <h2 className="text-lg md:text-3xl font-bold text-center uppercase font-cinzel">
          Total Price: ${totalPrice}
        </h2>
        {cart.length ? (
          <Link to="/dashboard/payment">
            <button className="btn text-lg md:text-xl font-bold uppercase bg-orange-400 px-6 py-2 rounded-lg font-cinzel">
              Pay
            </button>
          </Link>
        ) : (
          <button
            disabled
            className="btn text-lg md:text-xl font-bold uppercase bg-orange-400 px-6 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed font-cinzel"
          >
            Pay
          </button>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto w-full mt-6">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="bg-yellow-600 text-white">
              <th className="rounded-tl-md font-semibold text-base font-inter">
                No
              </th>
              <th className="font-semibold text-base font-inter">Item Image</th>
              <th className="font-semibold text-base font-inter">Item Name</th>
              <th className="font-semibold text-base font-inter">Price</th>
              <th className="rounded-tr-md font-semibold text-base font-inter">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td className="font-inter font-bold text-xl">{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="font-inter font-regular text-xl text-[#737373]">
                  <div>{item.name}</div>
                </td>
                <td className="font-inter font-regular text-xl text-[#737373]">
                  ${item.price}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-md transition duration-200"
                    title="Delete"
                  >
                    <FaTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
