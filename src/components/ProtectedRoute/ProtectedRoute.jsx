import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// const ProtectedRoute = () => {
//   const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
//   console.log(isLoggedIn, "islogged");
//   return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
// };
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  if (!isLoggedIn) {
    // Redirect to login if not logged in
    return <Navigate to="/login" />;
  }

  // Render children (protected content) if logged in
  return children;
};

export default ProtectedRoute;
