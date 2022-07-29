import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import AuthContext from "../../contexts/authenticationContext";
import LocationContext from "../../contexts/locationContext";

import { useNavigate } from "react-router-dom";
import "./Dropdown.scss";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function Dropdown({ dropdown, setDropdown }) {
    const userContext = useContext(AuthContext);
    const isLoggedIn = userContext.isLoggedIn;
    const locationContext = useContext(LocationContext);
    const { setLastLocation } = locationContext;

    const navigate = useNavigate();

    const logoutButton = () => {
        userContext.logout();
        navigate("/");
    };

    if (!isLoggedIn) {
        return (
            <div className={"dropdownMenu" + " " + dropdown}>
                <Link
                    to="/authentication/login"
                    onClick={() => {
                        setDropdown("");
                        setLastLocation();
                    }}
                    className={"signInBTN"}
                >
                    <PrimaryButton cName={"secondary"}>{"Login"}</PrimaryButton>
                </Link>
                <p className="small">
                    New around?
                    <span>
                        {" "}
                        <Link
                            to={"/authentication/register"}
                            onClick={() => {
                                setDropdown("");
                                setLastLocation();
                            }}
                            className={"small"}
                        >
                            Register
                        </Link>
                    </span>
                </p>
            </div>
        );
    } else {
        return (
            <div className={"dropdownMenu" + " " + dropdown}>
                <Link
                    to={"/logout"}
                    onClick={() => {
                        setDropdown("");
                        //logoutButton();
                    }}
                    className={"small"}
                >
                    Logout
                </Link>
            </div>
        );
    }
}
