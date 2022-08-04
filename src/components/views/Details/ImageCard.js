import "./ImageCard.scss";

const imageCard = ({ imageData = "", active, activeCardHoverHandler }) => {
    const onMouseOverHandler = (e) => {
        activeCardHoverHandler(imageData);
    };

    return (
        <li
            className={
                "imageCardContainer " + (active == imageData ? "active" : "")
            }
            onMouseOver={onMouseOverHandler}
        >
            <img src={imageData[1]} alt={imageData[1]} />
        </li>
    );
};

export default imageCard;
