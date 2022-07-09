import React, { useState } from "react";
import { v4 as _idGen } from "uuid";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

import "./Dropdown.scss";
import InvertedButton from "../Buttons/InvertedButton";

export default function Dropdown({ user, dropdown, setDropdown }) {
    if (!user) {
        return (
            <div className={"dropdownMenu" + " " + dropdown}>
                <Link
                    to="/authentication/login"
                    onClick={() => setDropdown("")}
                    className={"signInBTN"}
                >
                    <InvertedButton cName={"secondary"}>
                        {"Login"}
                    </InvertedButton>
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
        return "";
    }
}
