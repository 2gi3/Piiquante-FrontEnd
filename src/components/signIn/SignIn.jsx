import "./signIn.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faKey, faAt } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import axios from 'axios'

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userData = {
        email,
        password
    }

    const logIn = (e) => {
        e.preventDefault();
        let data = {
            email: email,
            password: password,
        }
        console.log(data)
        //  if(!re.test(email)){
        // 	  setEmailInvalid(` Please provide a valid email `)			  
        // 	}else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
        // 	      setPasswordWarning('Please provide a password that contains minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character')
        // 		}else{		
        axios.post("https://secure-harbor-62492.herokuapp.com/api/auth/login", data)
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
    return (
        <div className="container">
            <div className="innerContainer">
                <form onSubmit={event => logIn(event)}>
                    <div className="inputBox">
                        <input type="email" name="userEmail" placeholder="UserEmail"
                            onChange={event => setEmail(event.target.value)}
                            onInput={event => setEmail(event.target.value)}
                        />
                        <div className="icon">
                            <FontAwesomeIcon icon={faAt} />
                        </div>
                        {/* <h1>{emailInvalid}</h1> */}
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
                    <div className="logInSignUpButtons">
                        <button className="signInButton sauceButton " type="submit" value="submit">
                            <span>Login <FontAwesomeIcon icon={faArrowRightToBracket} /></span>
                        </button>
                    </div>
                </form>
                <div className="logInSignUpButtons">
                <button className="signUpButton sauceButton"
                    onClick={() => console.log(userData)}>
                    <span>Sign up</span>
                </button>
            </div>
            </div>
        </div>
    )
}

export default SignIn