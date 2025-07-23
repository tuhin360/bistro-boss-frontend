import useAuth from "../../../hooks/useAuth";
const AdminHome = () => {
    const {user} = useAuth();
  return (
    <div>
      <h2>This is Admin Home</h2>
      {
        user?.displayName ? user.displayName : "Back"
      }
    </div>
  );
};

export default AdminHome;
