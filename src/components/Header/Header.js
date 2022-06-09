import "./Header.scss";
import PrimaryButton from "../Buttons/PrimaryButton";
import UserBtn from "./AccountBtn/UserBtn"
import GuestBtn from "./AccountBtn/GuestBtn"

import logo from "../Images/logo/logo-stx-white-yellow.png"

export default function Header() {
    const user = localStorage.getItem('user');

    return (
        <header className={"header"}>
            <div className={"logo-group"}>
                <i className="fa-solid fa-bars"></i>
                <img src={logo} alt="Logo" className={"logo"} />
                <form action="/" className={"search-bar-form"}>
                    <input
                        type="text"
                        className={"search-field"}
                        placeholder="Search for a product"
                    />
                    <button type="submit" className={"search-button"}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
            </div>
            <ul className={"nav-list-menu"}>
                <li>
                    <i className="fa-regular fa-heart"></i>
                </li>
                {user ? <UserBtn></UserBtn> : <GuestBtn></GuestBtn>}
                <li>
                    <PrimaryButton>{'Add More'}</PrimaryButton>
                </li>
            </ul>
        </header>
    );
}
