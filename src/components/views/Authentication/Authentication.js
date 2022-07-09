import React, { useState } from "react";
import { Link, Routes, Route, useLocation, NavLink } from "react-router-dom";
import Logo from "../../utils/Logo";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";
import "./Authentication.scss";

export default function Authentication() {
    return (
        <main>
            <Logo width={"180px"} fill={"primary0"} className={"logo"}></Logo>
            <div className="container">
                <nav>
                    <ul className={"authenticationTabs__navigation"}>
                        <li>
                            <NavLink
                                to={"/authentication/login"}
                                className={"login"}
                            >
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/authentication/register"}
                                className={"register"}
                            >
                                Register
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="formContent">
                    <Routes>
                        <Route index element={<FormLogin />}></Route>
                        <Route path="login" element={<FormLogin />}></Route>
                        <Route
                            path="register"
                            element={<FormRegister />}
                        ></Route>
                    </Routes>
                </div>
            </div>
        </main>
    );
}
