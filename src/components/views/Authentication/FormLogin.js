import { useContext, useEffect, useState } from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";
import AuthContext from "../../../contexts/authenticationContext";
import LocationContext from "../../../contexts/locationContext";

import "./Form.scss";

export default function FormLogin({ setAuthError }) {
    const userContext = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    useEffect(() => {
        return () => setAuthError("");
    }, [setAuthError]);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        userContext.login(email, password).catch(() => {
            setAuthError("Invalid Email and/or Password.");
            setPassword("");
        });
    };

    return (
        <div className="loginFormContainer">
            <form action="post" className="form" onSubmit={onSubmitHandler}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email address"
                    value={email}
                    onChange={emailChangeHandler}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={passwordChangeHandler}
                />

                <PrimaryButton cName={"primary1"} type={"submit"}>
                    {"Log in"}
                </PrimaryButton>
            </form>
        </div>
    );
}
