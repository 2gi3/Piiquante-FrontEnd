import "./header.css"
import logo from "../../assets/images/flame.png"
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'


function NavBar() {
    const fElement = <FontAwesomeIcon icon={faArrowRightFromBracket} />
    const params= useParams()

    function logOut(){
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('userId');
		sessionStorage.removeItem('UserName');
	    sessionStorage.removeItem('email');
		window.location="/signin";
	}
    return (
        <div>
            <div className="logInLogOutButtons">
            {/* <div className="login">
                <button>Log in {fElement}</button>
            </div> */}
            <div className="logout">
                <button onClick={logOut}>Log out {fElement}</button>
            </div>
            </div>
            <div className="header">
                <div className="logo"> <img src={logo} /></div>
                <div className="title">
                    <h1>HOT TAKES</h1>
                    <h3>THE WEB'S BEST HOT SAUCE REVIEWS</h3>
                </div>
                <div className="logo"> <img src={logo} /></div>
            </div>            
        </div>

    )
}
export default NavBar