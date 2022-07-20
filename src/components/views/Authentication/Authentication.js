import { useContext } from "react";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../utils/Logo";
import "./Authentication.scss";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";
import { UserDataContext } from "../../../App";
import { useEffect } from "react";

export default function Authentication() {
    const UserData = useContext(UserDataContext);
    console.log(UserData);
    const navigate = useNavigate();

    useEffect(() => {
        if (UserData) {
            return navigate("/myaccount");
        }
    }, []);

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
