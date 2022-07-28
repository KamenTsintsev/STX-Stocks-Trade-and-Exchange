import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isUserLogged, redirectPath = "/", children }) => {
    if (isUserLogged) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};

export default ProtectedRoute;
