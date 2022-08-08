import "./Buttons.scss";

const PrimaryButton = ({ cName = "", type, onClick, children }) => {
    return (
        <button
            className={"button primaryButton" + " " + cName}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;
