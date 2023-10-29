import { useContext } from "react";
import { AuthContent } from "../../Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {

      const { user, loading } = useContext(AuthContent);
      const location = useLocation();

      if (loading) {
            return <div className="flex justify-center items-center min-h-16"><span className="loading loading-bars loading-lg"></span>
            </div>
      }

      if (!user) {
            return <Navigate state={location.pathname} to='/login'></Navigate>
      }

      return children;
};

PrivateRoute.propTypes = {
      children: PropTypes.node
}

export default PrivateRoute;