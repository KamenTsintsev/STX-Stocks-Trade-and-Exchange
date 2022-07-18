import "./Buttons.scss";

const InvertedButton = ({ cName, type, children }) => {
    return (
        <button className={"button invertedButton" + " " + cName} type={type}>
            {children}
        </button>
    );
};

export default InvertedButton;
