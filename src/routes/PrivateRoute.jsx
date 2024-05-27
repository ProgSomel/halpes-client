import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./groovyWalk.json";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (user) {
    return children;
  }

  if (loading) {
    return (
        <Lottie animationData={groovyWalkAnimation} />
    );
  }

  return <Navigate state={location?.pathname} to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.object,
};

export default PrivateRoute;
