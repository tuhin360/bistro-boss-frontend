import { FaTrash } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);
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
          subHeading={"Your Cart"}
        ></SectionTitle>
      </div>

      {/* Summary */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-4">
        <h2 className="text-lg md:text-2xl font-bold text-center uppercase">
          Total Orders: {cart.length}
        </h2>
        <h2 className="text-lg md:text-2xl font-bold text-center uppercase">
          Total Price: ${totalPrice}
        </h2>
        <button className="btn text-lg md:text-xl font-bold uppercase bg-orange-400 px-6 py-2 rounded-lg">
          Pay
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto w-full mt-6">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt={item.name}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{item.name}</div>
                </td>
                <td>${item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrash className="text-red-600" />
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
