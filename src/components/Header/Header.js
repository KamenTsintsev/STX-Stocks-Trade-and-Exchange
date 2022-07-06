import "./Header.scss";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import Dropdown from "./Dropdown";
import PrimaryButton from "../Buttons/PrimaryButton";
import UserBtn from "./AccountBtn/UserBtn";
import GuestBtn from "./AccountBtn/GuestBtn";
import {
    faBars,
    faTimes,
    faMagnifyingGlass,
    faUser,
    faHeart as solidHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as slimHeart } from "@fortawesome/free-regular-svg-icons";
import logo from "../Images/logo/logo-stx-white-yellow.png";

export default function Header() {
    const [sideMenuState, setSideMenuState] = useState(false);
    const [dropdown, setDropdown] = useState("");
    const [favorite, setFavorite] = useState(false);
    const user = localStorage.getItem("user");

    const onSideMenuClickHandler = () => setSideMenuState(!sideMenuState);

    const onMouseOver = (e) => {
        e.currentTarget.className.includes("user")
            ? setDropdown("active")
            : setFavorite(true);
    };

    const onMouseOut = (e) => {
        e.currentTarget.className.includes("user")
            ? setDropdown("inactive")
            : setFavorite(false);
    };
    return (
        <header className={"header"}>
            <nav className={"navbar"}>
                <div className={"leftMenu"}>
                    <div className="menuIcon" onClick={onSideMenuClickHandler}>
                        <FontAwesomeIcon
                            icon={sideMenuState ? faTimes : faBars}
                            className={"i"}
                        />
                    </div>
                    <Link to={"/"}>
                        <img src={logo} className={"navbarLogo"} alt="logo" />
                    </Link>
                    <form className="searchBar">
                        <input
                            type="search"
                            name="searchField"
                            id="searchField"
                            className={"searchField"}
                            placeholder="Type something here"
                        />
                        <Link
                            to={`/allProducts/where=title$3D$22${"asd"}$22`}
                            className={"searchBTN"}
                        >
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                className={"i"}
                            />
                        </Link>
                    </form>
                    <div
                        className={
                            sideMenuState ? "sideMenu active" : "sideMenu"
                        }
                    >
                        <FontAwesomeIcon
                            icon={faTimes}
                            onClick={onSideMenuClickHandler}
                        />
                        <ul>
                            <li>
                                <p>Lorem5</p>
                            </li>
                            <li>
                                <p>Lorem5</p>
                            </li>
                            <li>
                                <p>Lorem5</p>
                            </li>
                            <li>
                                <p>Lorem5</p>
                            </li>
                            <li>
                                <p>Lorem5</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul className={"navMenu"}>
                    <li
                        className="navItem favorite"
                        onMouseOver={onMouseOver}
                        onMouseOut={onMouseOut}
                    >
                        <Link
                            to={"/favorites"}
                            className={"navLinks i"}
                            onClick={() => setSideMenuState(false)}
                        >
                            <FontAwesomeIcon
                                icon={favorite ? solidHeart : slimHeart}
                            />
                        </Link>
                    </li>
                    <li
                        className="navItem user"
                        onMouseOver={onMouseOver}
                        onMouseOut={onMouseOut}
                    >
                        <Link
                            to={user ? "/myItems" : "/authentication"}
                            className={"navLinks i"}
                            onClick={() => setSideMenuState(false)}
                        >
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                        <Dropdown
                            user={user}
                            setDropdown={setDropdown}
                            dropdown={dropdown}
                        />
                    </li>
                    <li className="navItem">
                        <Link
                            to={"/addItem"}
                            className={"navLinks"}
                            onClick={() => setSideMenuState(false)}
                        >
                            <PrimaryButton>{"Add Item"}</PrimaryButton>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
