import "./signUp.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faKey, faAt, faUsers } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [logInMessage, setLogInMessage] = useState('')
    const [afterLogIn, setAfterLogIn] = useState('')
    const inputRef = useRef(null)
    const [emailWarning, setEmailWarning] = useState('')
    const [passwordWarning, setPasswordWarning] = useState('')
    const re = /\S+@\S+\.\S+/g;
    const userData = {
        email,
        password
    }

    useEffect(() => {
        inputRef.current.focus()

    }, [])


    const signUp = (e) => {
        e.preventDefault()
        if (!re.test(email)) {
            //   setEmailWarning(` Please provide a valid email `)	
            alert("Please provide a valid email address")
            // 	}else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
            // 	    //   setPasswordWarning('Please provide a password that contains minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character')
            //           alert("Please provide a password that contains minimum eight characters,\n at least one uppercase letter, one lowercase letter, one number and one special character"
            //              )
        } else {
            axios.post("https://secure-harbor-62492.herokuapp.com/api/auth/signup", userData)
                .then(
                    () => {
                        window.location = "/login";
                    })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
    return (
        <div className="container">
            <div className="inContainer">
                <form onSubmit={e => signUp(e)}>
                    <div className="inputBox">
                        <input ref={inputRef} type="email" name="userEmail" placeholder="UserEmail"
                            onChange={event => setEmail(event.target.value)}
                        />
                        <div className="icon">
                            <FontAwesomeIcon icon={faAt} />
                        </div>
                        {/* <h1>{emailWarning}</h1> */}
                    </div>
                    <div className="inputBox">
                        <input type="password" name="password" placeholder="Password"
                            onChange={event => setPassword(event.target.value)}
                        />
                        <div className="icon">
                            <FontAwesomeIcon icon={faKey} />
                        </div>
                        {/* <h1>{passwordWarning}</h1> */}
                    </div>
                    {/* <div className="logInMessage"> <p>{logInMessage}</p></div> */}
                    <div >
                        <button className="primaryButton sauceButton" type="submit" value="submit">
                            <span>Sign up <FontAwesomeIcon icon={faUsers} /></span>
                        </button>
                    </div>
                </form>
                <div className="extraButton">
                    <p> Already have an account? 
                    <Link to={"/signin"}>
                        
                            <span> Log in &#160;<FontAwesomeIcon icon={faUsers} /></span>
                        
                    </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp