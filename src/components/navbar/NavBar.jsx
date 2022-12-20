// import './navBar.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { PrimaryButton, HiddenComponent } from '../../styles/styledComponents'
import colors from '../../styles/colors'
function NavBar() {
  return (
    // <div className="links">
    <Link style={{ all: 'unset' }} className="link" to="newsauce">
      <PrimaryButton
        mainColor={colors.secondaryColor}
        minorColor={colors.primaryColor}
      >
        Create a sauce
      </PrimaryButton>
      <HiddenComponent>
        {!sessionStorage.getItem('token') ? (
          <p>Log in to add your favourite sauce.</p>
        ) : (
          <p>You can modify it later.</p>
        )}
      </HiddenComponent>
    </Link>
    // </div>
  )
}

export default NavBar
