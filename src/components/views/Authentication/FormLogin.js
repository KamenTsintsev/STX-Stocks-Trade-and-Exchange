import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as userAPI from "../../../api/UserAPI";
import PrimaryButton from "../../Buttons/PrimaryButton";
import "./Form.scss";

export default function FormLogin() {
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
        await userAPI.login(email, password);
        navigate("/");
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
