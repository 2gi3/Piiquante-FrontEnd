import { ErrorMessage } from '../../styles/styledComponents'

const Error = ({ handleClick }) => {
  return (
    <ErrorMessage>
      ;<h3>Something went wrong, sorry.</h3>
      <p>Please try again later</p>
      <button onClick={handleClick}>Try again</button>
    </ErrorMessage>
  )
}

export default Error
