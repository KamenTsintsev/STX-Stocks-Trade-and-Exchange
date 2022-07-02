import "./AccountBtn.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function GuestBtn({ hover, blur, children }) {

    return (
        <li className="user-btn guest"
            onMouseEnter={hover}
            onMouseLeave={blur}
        >
            <p>Sign in</p>
            <div>
                <FontAwesomeIcon icon={faUser} className={"i"} />
            </div>

        </li>
    );
}
