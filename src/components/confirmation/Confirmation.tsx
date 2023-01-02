import React, { useState } from 'react'
import { Loader } from '../../styles/styledComponents'
import { ConfirmationContainer } from './confirmationStyledComponents'

// type Props = {
//   onClick: React.MouseEventHandler<HTMLButtonElement>
// }

const Confirmation = ({ message, setMessage, goAhead }) => {
  return (
    <ConfirmationContainer>
      {message === 'deletion in progress' ? (
        <Loader data-testid="confirmationLoader" />
      ) : (
        <>
          <div>
            <h3>{message}</h3>
          </div>
          <div>
            <button onClick={() => setMessage(null)}>No</button>
            <button onClick={goAhead}>Yes</button>
          </div>
        </>
      )}
    </ConfirmationContainer>
  )
}

export default Confirmation
