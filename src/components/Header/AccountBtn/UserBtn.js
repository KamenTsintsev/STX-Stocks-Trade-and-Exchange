import "./AccountBtn.scss"
import userIcon from '../../Images/userIcon/userIcon-white.png'


export default function UserBtn() {

    return (
        <li className="user-btn user">
            <p>Sign up</p>
            <img src={userIcon} alt="userIcon" className="userIcon" />
            {/* <i className="fa-regular fa-circle-user"></i> */}
        </li>
    )
}