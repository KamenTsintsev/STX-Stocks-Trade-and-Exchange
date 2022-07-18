import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../Buttons/PrimaryButton";
import "./Form.scss";

export default function FormRegister() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePass, setRePass] = useState("");
    const navigate = useNavigate();

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
        console.log("email:" + email);
        console.log("password:" + password);
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
                    type="rePass"
                    name="rePass"
                    id="rePass"
                    placeholder="••••••••"
                    value={rePass}
                    onChange={rePassHandler}
                />

                <PrimaryButton cName={"primary1"} type={"submit"}>
                    {"Log in"}
                </PrimaryButton>
            </form>
        </div>
    );
}
