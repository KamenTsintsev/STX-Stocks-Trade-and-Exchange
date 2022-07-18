import "./Header.scss";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import Dropdown from "./Dropdown";
import InvertedButton from "../Buttons/InvertedButton";

import {
    faBars,
    faTimes,
    faMagnifyingGlass,
    faUser,
    faHeart as solidHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as slimHeart } from "@fortawesome/free-regular-svg-icons";
import Logo from "../utils/Logo";

export default function Header({ token }) {
    const [sideMenuState, setSideMenuState] = useState(false);
    const [dropdown, setDropdown] = useState("");
    const [favorite, setFavorite] = useState(false);

    const onSideMenuClickHandler = () => setSideMenuState(!sideMenuState);

    const onUserMouseOver = (e) => {
        setDropdown("active");
    };

    const onUserMouseOut = (e) => {
        setDropdown("inactive");
    };

    const onFavMouseOver = () => {
        setFavorite(true);
    };

    const onFavMouseOut = () => {
        setFavorite(false);
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
                    <Logo width={"100px"} fill={"gray6"} className={"logo"} />
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
                        onMouseOver={onFavMouseOver}
                        onMouseOut={onFavMouseOut}
                    >
                        <Link
                            to={"/favorites"}
                            className={"navLinks"}
                            onClick={() => setSideMenuState(false)}
                        >
                            <FontAwesomeIcon
                                icon={favorite ? solidHeart : slimHeart}
                                className={"i"}
                            />
                        </Link>
                    </li>
                    <li
                        className="navItem user"
                        onMouseOver={onUserMouseOver}
                        onMouseOut={onUserMouseOut}
                    >
                        <Link
                            to={token ? "/myItems" : "/authentication/login"}
                            className={"navLinks i"}
                            onClick={() => setSideMenuState(false)}
                        >
                            <FontAwesomeIcon icon={faUser} className={"i"} />
                        </Link>
                        <Dropdown
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
                            <InvertedButton>{"Add Item"}</InvertedButton>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
