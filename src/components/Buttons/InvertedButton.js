import "./Buttons.scss";

export default ({ cName, children }) => {
    return (
        <button className={"button invertedButton" + " " + cName}>
            {children}
        </button>
    );
};
