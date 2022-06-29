import "./AccountBtn.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
// import userIcon from '../../Images/userIcon/userIcon-white.png'


export default function GuestBtn() {

    return (
        <li className="user-btn guest">
            <p>Sign up</p>
            <div>
                <FontAwesomeIcon icon={faUser} className={"i"}></FontAwesomeIcon>
            </div>
            {/* <img src={userIcon} alt="userIcon" className="userIcon" /> */}
            {/* <i className="fa-regular fa-circle-user"></i> */}
        </li>
    )
}