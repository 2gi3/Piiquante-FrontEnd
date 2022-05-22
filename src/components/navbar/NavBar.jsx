import "./navBar.css"
import logo from "../../assets/images/flame.png"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    const fElement = <FontAwesomeIcon icon={faArrowRightFromBracket} />
    return (
        <div>
            <div className="logout">
                <button>Log out</button>
            </div>
            <div className="header">
                <div className="logo"> <img src={logo} /></div>
                <div className="title">
                    <h1>HOT TAKES</h1>
                    <h3>THE WEB'S BEST HOT SAUCE REVIEWS</h3>
                </div>
                <div className="logo"> <img src={logo} /></div>
            </div>
            <div className="navLinks">
                <Link className="nav-link" to='/'>
                    {/* <span><img src={icon1} alt="" /></span> */}
                    All sauces
                </Link>
                <Link className="nav-link" to='/'>
                    {/* <span><img src={icon1} alt="" /></span> */}
                    Create a sauce
                </Link>
            </div>
        </div>

    )
}
export default NavBar