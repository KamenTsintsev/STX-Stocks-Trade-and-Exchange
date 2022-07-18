import "./Buttons.scss";

const PrimaryButton = ({ cName, type, children }) => {
    return (
        <button className={"button primaryButton" + " " + cName} type={type}>
            {children}
        </button>
    );
};

export default PrimaryButton;
