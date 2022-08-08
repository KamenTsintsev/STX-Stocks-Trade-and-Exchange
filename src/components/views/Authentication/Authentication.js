import { useState } from "react";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";
import Logo from "../../utils/Logo";

import "./Authentication.scss";

export default function Authentication() {
    const [authError, setAuthError] = useState("");
    return (
        <main className="authMain">
            <Logo width={"180px"} fill={"primary0"} className={"logo"} />
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
                {authError && (
                    <div className="errorContainer">
                        <p className="error">{authError}</p>
                    </div>
                )}
                <div className="formContent">
                    <Routes>
                        <Route
                            index
                            element={<FormLogin setAuthError={setAuthError} />}
                        ></Route>
                        <Route
                            path="login"
                            element={<FormLogin setAuthError={setAuthError} />}
                        ></Route>
                        <Route
                            path="register"
                            element={
                                <FormRegister setAuthError={setAuthError} />
                            }
                        ></Route>
                    </Routes>
                </div>
            </div>
        </main>
    );
}
