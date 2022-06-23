import "./navBar.css"
import { Link, } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
function NavBar() {

    return (
        <div className="navLinks">
            {/* <Link className="link" to='/'>
                <button className="nav-link">
                All sauces
                </button>
            </Link> */}
            <Link className="link" to='newsauce'>
                <button className="nav-link">
                Create a sauce
                </button>
            </Link>
        </div>
    )
} 

export default NavBar