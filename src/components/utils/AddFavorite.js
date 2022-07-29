import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as dataApi from "../../api/DataAPI";
import { getIsUserLogged } from "../../api/Utils";
import AuthContext from "../../contexts/authenticationContext";
import LocationContext from "../../contexts/locationContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as slimHeart } from "@fortawesome/free-regular-svg-icons";

import "./AddFavorite.scss";

const AddFavorite = ({ itemID }) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [favoriteID, setFavoriteID] = useState("");
    const isUserLogged = getIsUserLogged();

    const userId = useContext(AuthContext)?._id;
    const { lastLocation, setLastLocation } = useContext(LocationContext);

    useEffect(() => {
        if (userId) {
            const getIsFavorite = async () => {
                const result = await dataApi.isItemFavorite(itemID, userId);
                setFavoriteID(result[0]?._id);
                setIsFavorite(result.length ? true : false);
            };

            getIsFavorite();
        }
    }, [isFavorite]);

    function isHoveredOnMouseOver() {
        setIsHovered(true);
    }

    function isHoveredOnMouseOut() {
        setIsHovered(false);
    }

    const onFavoriteClickHandler = async () => {
        if (!isUserLogged) {
            setLastLocation();

            return navigate("../authentication/login");
        }

        if (isFavorite) {
            await dataApi.removeFavoriteItem(favoriteID);
            setIsFavorite((state) => !state);
        }

        if (!isFavorite) {
            await dataApi.addItemToFavorite(itemID);
            setIsFavorite((state) => !state);
        }
    };

    const normalIcon = (
        <FontAwesomeIcon
            icon={isHovered ? solidHeart : slimHeart}
            className={"i"}
        />
    );

    const favoriteIcon = <FontAwesomeIcon icon={solidHeart} className={"i"} />;

    return (
        <div
            className={
                isFavorite ? "favIconContainer favorite" : "favIconContainer"
            }
            onMouseOver={isHoveredOnMouseOver}
            onMouseOut={isHoveredOnMouseOut}
            onClick={onFavoriteClickHandler}
        >
            {isFavorite ? favoriteIcon : normalIcon}
        </div>
    );
};
export default AddFavorite;
