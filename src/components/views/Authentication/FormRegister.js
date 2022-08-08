import { useContext, useEffect, useState } from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";
import AuthContext from "../../../contexts/authenticationContext";
import LocationContext from "../../../contexts/locationContext";

import "./Form.scss";

export default function FormRegister({ setAuthError }) {
    const userContext = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePass, setRePass] = useState("");

    useEffect(() => {
        return () => setAuthError("");
    }, [setAuthError]);

    const emailHandler = (e) => {
        setEmail(e.target.value);
    };
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    };
    const rePassHandler = (e) => {
        setRePass(e.target.value);
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if (password !== rePass) {
            setAuthError("Passwords do NOT match.");
        } else {
            userContext
                .register(email, password)
                .catch(() => {
                    setAuthError("User with this Email already exist.");
                    setPassword("");
                    setRePass("");
                });
        }
    };
    return (
        <div className="registerFormContainer">
            <form action="post" className="form" onSubmit={onSubmitHandler}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email address"
                    value={email}
                    onChange={emailHandler}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={passwordHandler}
                />

                <label htmlFor="rePass">Repeat Password</label>
                <input
                    type="password"
                    name="rePass"
                    id="rePass"
                    placeholder="••••••••"
                    value={rePass}
                    onChange={rePassHandler}
                />

                <PrimaryButton cName={"primary1"} type={"submit"}>
                    {"Register"}
                </PrimaryButton>
            </form>
        </div>
    );
}
