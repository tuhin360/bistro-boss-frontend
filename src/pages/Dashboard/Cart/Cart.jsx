import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div className="bg-gray-100 min-h-screen ">
      <div className="-mt-8">
        <SectionTitle
          heading={"Wanna Add More"}
          subHeading={"Your Cart"}
        ></SectionTitle>
      </div>
      <div>
        <div className=" flex justify-around items-center ">
          <h2 className="text-2xl font-bold text-center my-8 uppercase">
            Total Orders: {cart.length}
          </h2>
          <h2 className="text-2xl font-bold text-center my-8 uppercase">
            Total Price: ${totalPrice}
          </h2>
          <button className="btn text-2xl font-bold text-center my-8 uppercase bg-orange-400 p-3 rounded-lg">
            Pay
          </button>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="font-bold">{item.name}</div>
                  </td>
                  <td>${item.price}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
