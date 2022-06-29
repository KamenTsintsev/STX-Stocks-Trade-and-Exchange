import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import PrimaryButton from "../Buttons/PrimaryButton";
import UserBtn from "./AccountBtn/UserBtn"
import GuestBtn from "./AccountBtn/GuestBtn"
import logo from "../Images/logo/logo-stx-white-yellow.png"


export default function Header() {
    const user = localStorage.getItem('user');

    return (
        <header className={"header"}>
            <div className={"logo-group"}>
                <FontAwesomeIcon icon={faBars} className={"i"} />
                <img src={logo} alt="Logo" className={"logo"} />
                <form action="/" className={"search-bar-form"}>
                    <input
                        type="text"
                        className={"search-field"}
                        placeholder="Search for a product"
                    />
                    <button type="submit" className={"search-button"}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={"i"} />
                    </button>
                </form>
            </div>
            <ul className={"nav-list-menu"}>
                <li>
                    <FontAwesomeIcon icon={faHeart} className={"i"} />
                </li>
                {user ? <UserBtn></UserBtn> : <GuestBtn></GuestBtn>}
                <li>
                    <PrimaryButton>{'Add More'}</PrimaryButton>
                </li>
            </ul>
        </header>
    );
}
