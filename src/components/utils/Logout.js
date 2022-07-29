import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as userAPI from "../../api/UserAPI";
import AuthContext from "../../contexts/authenticationContext";

const Logout = () => {
    const userContext = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            userContext.logout();
            navigate("/");
        } catch (err) {
            navigate("/");
            throw err;
        }
    }, []);
};

export default Logout;
