import { useContext, useEffect } from "react";
import AuthContext from "../../contexts/authenticationContext";

const Logout = () => {
    const userContext = useContext(AuthContext);

    useEffect(() => {
        userContext.logout();
    }, []);
};

export default Logout;
