import React, { useState } from "react";
import { v4 as _idGen } from "uuid";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

import "./Dropdown.scss";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function Dropdown({ token, dropdown, setDropdown }) {
    if (!token) {
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
