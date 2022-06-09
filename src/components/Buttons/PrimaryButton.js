import "./Buttons.scss"

export default (props) => {

    return (
        <button className={"button primary-button"}>{props.children}</button >
    )
}