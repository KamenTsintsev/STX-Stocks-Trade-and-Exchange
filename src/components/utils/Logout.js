import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as userAPI from "../../api/UserAPI";

const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const logout = async () => {
            await userAPI.logout();
            navigate("/");
        };

        logout();
    }, []);
};

export default Logout;
