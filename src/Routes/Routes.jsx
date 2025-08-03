import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import ContactUs from "../pages/ContactUs/ContactUs";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import ReadMore from "../pages/Home/ReadMore/ReadMore";
import ManageBookings from "../pages/Dashboard/ManageBookings/ManageBookings";
import AddReview from "../pages/Dashboard/AddReview/AddReview";
import Reservation from "../pages/Dashboard/Reservation/Reservation";
import MyBooking from "../pages/Dashboard/MyBooking/MyBooking";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "menu",
          element: <Menu />,
        },
        {
          path: "order/:category",
          element: <Order />,
        },
        {
          path: "contact",
          element: <ContactUs />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "read-more",
          element: <ReadMore />,
        },
      ],
    },
    {
      path: "dashboard",
      element: (
        <PrivateRoutes>
          <Dashboard />
        </PrivateRoutes>
      ),
      children: [
        // normal user routes
        {
          path: "userHome",
          element: <UserHome />,
        },
        {
          path: "reservation",
          element: <Reservation />,
        },
        {
          path: "paymentHistory",
          element: <PaymentHistory />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "addReview",
          element: <AddReview />,
        },
        {
          path: "myBooking",
          element: <MyBooking />,
        },
        {
          path: "payment",
          element: <Payment />,
        },

        // admin only routes
        {
          path: "adminHome",
          element: <AdminHome />,
        },
        {
          path: "allUsers",
          element: (
            <AdminRoutes>
              <AllUsers />
            </AdminRoutes>
          ),
        },
        {
          path: "addItem",
          element: (
            <AdminRoutes>
              <AddItem />
            </AdminRoutes>
          ),
        },
        {
          path: "manageItems",
          element: (
            <AdminRoutes>
              <ManageItems />
            </AdminRoutes>
          ),
        },
        {
          path: "manageBookings",
          element: (
            <AdminRoutes>
              <ManageBookings />
            </AdminRoutes>
          ),
        },
        {
          path: "updateItem/:id",
          element: (
            <AdminRoutes>
              <UpdateItem />
            </AdminRoutes>
          ),
          loader: ({ params }) =>
            fetch(
              `http://localhost:5000/menu/${params.id}`
            ),
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);
