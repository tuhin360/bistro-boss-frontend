import { useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoutes;
