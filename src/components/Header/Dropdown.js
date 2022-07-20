import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { UserDataContext } from "../../App";

import "./Dropdown.scss";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function Dropdown({ dropdown, setDropdown }) {
    const UserData = useContext(UserDataContext);

    if (!UserData) {
        return (
            <div className={"dropdownMenu" + " " + dropdown}>
                <Link
                    to="/authentication/login"
                    onClick={() => setDropdown("")}
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
                            onClick={() => setDropdown("")}
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
                    onClick={() => setDropdown("")}
                    className={"small"}
                >
                    Logout
                </Link>
            </div>
        );
    }
}
