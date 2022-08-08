import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as dataApi from "../../api/DataAPI";
import AuthContext from "../../contexts/authenticationContext";
import LocationContext from "../../contexts/locationContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as slimHeart } from "@fortawesome/free-regular-svg-icons";

import "./AddFavorite.scss";

const AddFavorite = ({ itemId }) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [favoriteId, setFavoriteId] = useState("");
    const { isLoggedIn, userId } = useContext(AuthContext);

    const { setLastLocation } = useContext(LocationContext);

    useEffect(() => {
        if (isLoggedIn) {
            const getIsFavorite = async () => {
                const result = await dataApi.isItemFavorite(itemId, userId);
                setFavoriteId(result[0]?._id);
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
        if (!isLoggedIn) {
            setLastLocation();

            return navigate("../authentication/login");
        }

        if (isFavorite) {
            await dataApi.removeFavoriteItem(favoriteId);
            setIsFavorite((state) => !state);
        }

        if (!isFavorite) {
            await dataApi.addItemToFavorite(itemId);
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
