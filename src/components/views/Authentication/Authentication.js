import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Logo from "../../utils/Logo";
import "./Authentication.scss";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";

export default function Authentication() {
    return (
        <main className="authMain">
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
