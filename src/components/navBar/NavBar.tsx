import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PrimaryButton, HiddenComponent } from '../../styles/styledComponents'
import colors from '../../styles/colors'
import { UserContext } from '../../store/Context.tsx'

function NavBar() {
  const { user2 } = useContext(UserContext)
  return (
    <Link style={{ all: 'unset' }} className="link" to="newsauce">
      <PrimaryButton
        mainColor={colors.secondaryColor}
        minorColor={colors.primaryColor}
      >
        Create a sauce
      </PrimaryButton>
      <HiddenComponent>
        {user2.token === null ? (
          <p>Log in to add your favourite sauce.</p>
        ) : (
          <p>You can modify it later.</p>
        )}
      </HiddenComponent>
    </Link>
  )
}

export default NavBar
