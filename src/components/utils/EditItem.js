import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as dataApi from "../../api/DataAPI";
import AuthContext from "../../contexts/authenticationContext";
import LocationContext from "../../contexts/locationContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare as solidEdit } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare as slimEdit } from "@fortawesome/free-regular-svg-icons";

import "./EditItem.scss";

const EditItem = ({ itemId }) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const { setLastLocation } = useContext(LocationContext);

    function isHoveredOnMouseOver() {
        setIsHovered(true);
    }

    function isHoveredOnMouseOut() {
        setIsHovered(false);
    }

    const onFavoriteClickHandler = async () => {
        setLastLocation();
        navigate("/edit/" + itemId);
    };

    const normalIcon = (
        <FontAwesomeIcon
            icon={isHovered ? solidEdit : slimEdit}
            className={"i"}
        />
    );

    return (
        <div
            className={"editIconContainer"}
            onMouseOver={isHoveredOnMouseOver}
            onMouseOut={isHoveredOnMouseOut}
            onClick={onFavoriteClickHandler}
        >
            {normalIcon}
        </div>
    );
};
export default EditItem;
