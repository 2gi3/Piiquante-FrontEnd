import "./signIn.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faKey, faAt, faUsers } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios'

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [logInMessage, setLogInMessage] =useState('')
    const [afterLogIn, setAfterLogIn] =useState('')
    const inputRef = useRef(null)
    const [emailWarning, setEmailWarning] = useState('')
    const [passwordWarning, setPasswordWarning]= useState('')
    const re = /\S+@\S+\.\S+/g;
    const userData = {
        email,
        password
    }

    useEffect(()=>{
        inputRef.current.focus()

    },[])

    const logIn = (e,) => {
        e.preventDefault();
        console.log(userData)
        //  if(!re.test(email)){
        // 	//   setEmailWarning(` Please provide a valid email `)	
        //       alert("Please provide a valid email")		  
        // 	}else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
        // 	    //   setPasswordWarning('Please provide a password that contains minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character')
        //           alert("Your password must contain minimum eight characters,\n at least one uppercase letter, one lowercase letter, one number and one special character"
        //              )
        // 		}else{		
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
                console.log(err);
            });
        // }
    }

    const signUp = (e) =>{
        e.preventDefault()
        // if(!re.test(email)){
        // 	//   setEmailWarning(` Please provide a valid email `)	
        //       alert("Please provide a valid email")		  
        // 	}else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
        // 	    //   setPasswordWarning('Please provide a password that contains minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character')
        //           alert("Please provide a password that contains minimum eight characters,\n at least one uppercase letter, one lowercase letter, one number and one special character"
        //              )
        // 		}else{	
        axios.post("https://secure-harbor-62492.herokuapp.com/api/auth/signup", userData)
        .then(
            () => {
                // logIn()
               
                console.log("user created");
                setAfterLogIn('vanish')
                setLogInMessage('Log in to read some hot reviews!')

                // window.location = "/";
            })
        .catch((err) => {
            console.log(err);
        });
    // }
}
    return (
        <div className="container">
            <div className="inContainer">
                <form onSubmit={event => logIn(event)}>
                    <div className="inputBox">
                        <input ref={inputRef} type="email" name="userEmail" placeholder="UserEmail"
                            onChange={event => setEmail(event.target.value)}
                            onInput={event => setEmail(event.target.value)}
                        />
                        <div className="icon">
                            <FontAwesomeIcon icon={faAt} />
                        </div>
                        {/* <h1>{emailWarning}</h1> */}
                    </div>
                    <div className="inputBox">
                        <input type="password" name="password" placeholder="Password"
                            onChange={event => setPassword(event.target.value)}
                            onInput={event => setPassword(event.target.value)}
                        />
                        <div className="icon">
                            <FontAwesomeIcon icon={faKey} />
                        </div>
                        {/* <h1>{passwordWarning}</h1> */}
                    </div>
                    <div className="logInMessage"> <p>{logInMessage}</p></div>
                    <div className="logInSignUpButtons">
                        <button className="signInButton sauceButton " type="submit" value="submit">
                            <span>Login <FontAwesomeIcon icon={faArrowRightToBracket} /></span>
                        </button>
                    </div>
                </form>
                <div className="logInSignUpButtons">
                <button className="signUpButton sauceButton" id={afterLogIn}
                    onClick={e => signUp(e)}>
                    <span>Sign up <FontAwesomeIcon icon={faUsers} /></span>
                </button>
            </div>
            </div>
        </div>
    )
}

export default SignIn