import React from 'react'
import colors from '../../styles/colors'
import { ErrorMessage, PrimaryButton } from '../../styles/styledComponents'

const Error = ({ handleClick }) => {
  return (
    <ErrorMessage>
      <h3>Something went wrong, sorry.</h3>
      <p>Please try again later</p>
      <PrimaryButton
        onClick={handleClick}
        mainColor={colors.secondaryColor}
        minorColor={colors.primaryColor}
      >
        Try again
      </PrimaryButton>
    </ErrorMessage>
  )
}

export default Error
