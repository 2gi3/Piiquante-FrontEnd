import './navBar.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
function NavBar() {
  return (
    <div className="navLinks">
      <Link className="link" to="newsauce">
        <button className="nav-link">Create a sauce</button>
        <div className="hiddenMessage">
          {!sessionStorage.getItem('token') ? (
            <p>Log in to add your favourite sauce.</p>
          ) : (
            <p>You can modify or delete your sauces later.</p>
          )}
        </div>
      </Link>
    </div>
  )
}

export default NavBar
