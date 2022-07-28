import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../Buttons/PrimaryButton";
import AuthContext from "../../../contexts/authenticationContext";

import "./Form.scss";

export default function FormLogin() {
    const userContext = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        userContext.login(email, password);
        navigate(-1);
    };

    return (
        <div className="formContainer">
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
