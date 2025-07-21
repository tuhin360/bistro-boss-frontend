import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import { FaTrash, FaEdit } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = async (id, name) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await axiosSecure.delete(`/menu/${id}`);
      if (res.data.deletedCount > 0) {
        Swal.fire(`${name} has been deleted.`, "", "success");
        refetch();
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      Swal.fire("Error!", "Failed to delete item.", "error");
    }
  };

  // const handleEditItem = (id) => {
  //   // TODO: Redirect to edit page or open modal
  //   console.log("Edit item:", id);
  // };

  return (
    <div className="bg-gray-100 p-10 rounded-lg shadow-md min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
        <SectionTitle heading="Manage All Items" subHeading="Hurry Up!" />

        <h2 className="text-2xl font-semibold uppercase tracking-wide mt-4">
          Total Items: {menu.length}
        </h2>

        <div className="overflow-x-auto w-full mt-6">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="bg-[#D99904] text-white">
                <th className="rounded-tl-lg">No</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
                <th className="rounded-tr-lg">Action</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <Link
                      to={`/dashboard/updateItem/${item._id}`}
                    >
                      <button
                       
                        className="btn btn-sm bg-[#D99904] hover:bg-[#c18b02] text-white"
                      >
                        <FaEdit />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item._id,  item.name)}
                      className="btn btn-sm bg-red-500 hover:bg-red-700 text-white"
                    >
                      <FaTrash />
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

export default ManageItems;
