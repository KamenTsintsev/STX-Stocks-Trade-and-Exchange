import { Navigate, Outlet } from "react-router-dom";

const AuthenticationProtectRoute = ({ user, redirectPath = "/", children }) => {
    if (user) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};

export default AuthenticationProtectRoute;
