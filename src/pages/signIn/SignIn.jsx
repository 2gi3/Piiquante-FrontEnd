import "./signIn.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faKey, faAt, faUsers,faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [logInMessage, setLogInMessage] = useState("You have entered an invalid username or password")
    const [afterLogIn, setAfterLogIn] = useState('')
    const inputRef = useRef(null)
    const [emailWarning, setEmailWarning] = useState('')
    const [passwordWarning, setPasswordWarning] = useState('')
    const [passwordType, setPasswordType] = useState("password")
    const re = /\S+@\S+\.\S+/g;
    const [logInResponse, setLogInResponse] = useState('hidden')
    // const [logInMessage, setLogInMessage] = useState("You have entered an invalid username or password")
    const userData = {
        email,
        password
    }

    useEffect(() => {
        inputRef.current.focus()

    }, [])

    const logIn = (e,) => {
        e.preventDefault();
        console.log(userData)
        if (!re.test(email)) {
            // 	//   setEmailWarning(` Please provide a valid email `)
            setLogInMessage("Please provide a valid email address")
            setLogInResponse("appear secondaryColor");
            // 	}else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
            // 	    //   setPasswordWarning('Please provide a password that contains minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character')
            //           alert("Your password must contain minimum eight characters,\n at least one uppercase letter, one lowercase letter, one number and one special character"
            //              )
        } else {
            axios.post("https://secure-harbor-62492.herokuapp.com/api/auth/login", userData)
                .then(
                    (res) => {
                        sessionStorage.setItem("token", res.data.token)
                        sessionStorage.setItem("userId", res.data.userId)
                        sessionStorage.setItem("email", email)
                        // UserId = res.data.userId;
                        console.log(res);

                        window.location = "/";
                    })
                .catch((err) => {
                    setLogInResponse("appear primaryColor");
                    setLogInMessage("You have entered an invalid username or password")
                    console.log(err.message);
                    
                });
        }
    }

    //   
    return (
        <div className="container">
            <div className={logInResponse}>
                <p> {logInMessage} </p>
            </div>
            <div className="inContainer">
                <form onSubmit={event => logIn(event)}>
                    <div className="inputBox">
                        <input ref={inputRef} type="email" name="userEmail" placeholder="Email"
                            onChange={event => setEmail(event.target.value)}
                        />
                        <div className="icon">
                            <FontAwesomeIcon icon={faAt} />
                        </div>
                        {/* <h1>{emailWarning}</h1> */}
                    </div>
                    <div className="inputBox">
                        <input type={passwordType} name="password" placeholder="Password"
                            onChange={event => setPassword(event.target.value)}
                        />
                        <button type='button' onClick={()=>{
                            passwordType === 'password'? setPasswordType('text'): setPasswordType('password')
                            }} className="icon">
                            { passwordType === 'password'? <FontAwesomeIcon icon={faEyeSlash} />
                                : <FontAwesomeIcon icon={faEye} />}  
                        </button>
                        {/* <h1>{passwordWarning}</h1> */}
                    </div>
                    {/* <div className="logInMessage"> <p>{logInMessage}</p></div> */}
                    <div className="logInSignUpButtons">
                        <button className="primaryButton sauceButton" type="submit" value="submit">
                            <span>Log&nbsp;in <FontAwesomeIcon icon={faArrowRightToBracket} /></span>
                        </button>
                    </div>
                </form>
                <div className="extraButton" > Don’t have an account? 
                    <Link to={"/signup"}>
                          <p className="extraButtonText"> Sign&nbsp;up <span>  <FontAwesomeIcon icon={faUsers} /></span></p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignIn