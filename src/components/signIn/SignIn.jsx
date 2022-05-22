import "./signIn.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faKey } from '@fortawesome/free-solid-svg-icons'

function SignIn() {
    return (
        <div className="container">
            <div className="innerContainer">
                <form
                // onSubmit={event => logIn(event)}
                >                    
                        <div className="inputBox">
                            <input type="text" name="userEmail" placeholder="UserEmail"
                            //  onChange={event => setEmail(event.target.value)}
                              />
                              <div className="icon">
                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                            </div>
                            {/* <h1>{emailInvalid}</h1> */}
                        </div>                    
                        <div className="inputBox">
                            <input type="password" name="password" placeholder="Password"
                            //  onChange={event => setPassword(event.target.value)}
                              />
                              <div className="icon">
                            <FontAwesomeIcon icon={faKey} />
                            </div>
                            {/* <h1>{passwordWarning}</h1> */}
                        </div>
                    
                </form>
            </div>

        </div>
    )
}

export default SignIn