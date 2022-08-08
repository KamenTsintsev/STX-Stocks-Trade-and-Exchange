import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
    login as loginApi,
    register as registerApi,
    logout as LogoutApi,
    myAccount,
} from "../api/UserAPI";
import { getUserData } from "../api/Utils";

import LocationContext from "./locationContext";

const AuthContext = createContext({
    userData: "",
    userId: "",
    token: "",
    isLoggedIn: false,
    // loggedIn: false,
    login: () => {},
    register: () => {},
    logout: () => {},
    clearUserData: () => {},
});

export default AuthContext;

export const AuthContextProvider = (props) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(getUserData() || "");
    const [userId, setUserId] = useState("");
    const [token, setToken] = useState(userData.accessToken || "");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [initialState, setInitialState] = useState(JSON.stringify(userData));

    const { location } = useContext(LocationContext);

    useEffect(() => {
        async function verifyToken() {
            try {
                if (!!token) {
                    const userDataRes = await myAccount();

                    setUserData(getUserData());
                    setInitialState(JSON.stringify(userData));
                    setToken(userData.accessToken);
                    setUserId(userDataRes._id);
                    setIsLoggedIn(true);
                }
            } catch (err) {
                setUserData("");
                setInitialState("");
                setToken("");
                setUserId("");
                if (token) {
                    logout();
                }
                navigate("/authentication/login");
            }
        }
        verifyToken();
    }, [initialState]);

    const login = async (email, password) => {
        try {
            const userData = await loginApi(email, password);

            setInitialState(JSON.stringify(userData));
            setUserData(userData);
            setToken(userData.accessToken);
            setUserId(userData._id);
            setIsLoggedIn(true);

            navigate(location);
        } catch (error) {
            throw error;
        }
    };

    const register = async (email, password) => {
        try {
            const userData = await registerApi(email, password);

            setInitialState(JSON.stringify(userData));
            setUserData(userData);
            setToken(userData?.accessToken);
            setUserId(userData._id);
            setIsLoggedIn(true);

            navigate(location);
        } catch (error) {
            throw error;
        }
    };

    const logout = async () => {
        try {
            await LogoutApi();

            clearUserData();
            navigate("/");
        } catch (error) {
            console.log(error);
            clearUserData();
            navigate("/");
        }
    };

    const clearUserData = () => {
        setInitialState("");
        setUserData("");
        setToken("");
        setUserId("");
        setIsLoggedIn(false);
    };

    const contextValues = {
        userData,
        userId,
        token,
        isLoggedIn,
        login,
        register,
        logout,
        clearUserData,
    };

    return (
        <AuthContext.Provider value={contextValues}>
            {props.children}
        </AuthContext.Provider>
    );
};
