
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth();
    const location= useLocation();

    if (loading) {
    // Show spinner while checking auth state
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

    if(user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace />
};

export default PrivateRoutes;