import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Lottie from "lottie-react";
import { AuthContext } from "../provider/AuthProvider";
import loadingAnimation from "../assets/animations/loading.json"; 

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center w-2/4 md:w-1/4 mx-auto items-center h-screen">
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location?.pathname} replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
