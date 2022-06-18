import "./header.css"
import logo from "../../assets/images/flame.png"
import { Link, useParams, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons' 


function NavBar() {
    const logOutIcon = <FontAwesomeIcon icon={faArrowRightFromBracket} />
    const logInIcon = <FontAwesomeIcon icon={faArrowRightToBracket} />
    const params = useParams()
    const history = useLocation()
    const pathname = history.pathname
    console.log(pathname)

    function logOut() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('UserName');
        sessionStorage.removeItem('email');
        window.location = "/signin";
    }
    return (
        <div>
            {pathname === "/signin" || pathname === "/newsauce"? <></>
            : <div className="logInLogOutButtons">
                {!sessionStorage.getItem('token')?
                <Link to={"/signin"}>
                    <div className="logout">
                        <button>Log in <span>{logInIcon}</span></button>
                    </div>
                </Link>
                : <div className="logout">
                    <button onClick={logOut}>Log out <span>{logOutIcon}</span></button>
                </div>}
            </div>}
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