import "./ImageCard.scss";

const imageCard = ({
    image,
    onMouseOverImageHangler,
    active,
    activeCardHoverHandler,
}) => {
    const onMouseOverHandler = (e) => {
        onMouseOverImageHangler(e);
        activeCardHoverHandler(image);
    };
    return (
        <li
            className={
                "imageCardContainer " + (active == image ? "active" : "")
            }
            onMouseOver={onMouseOverHandler}
        >
            <img src={image} />
        </li>
    );
};

export default imageCard;
