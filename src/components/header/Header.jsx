import "./header.scss"
import logo from "../../assets/images/flame.png"
import background from "../../assets/images/hero.webp"
import { Link, useParams, useLocation } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'


function NavBar() {
    const logOutIcon = <FontAwesomeIcon icon={faArrowRightFromBracket} />
    const logInIcon = <FontAwesomeIcon icon={faArrowRightToBracket} />
    const params = useParams()
    const history = useLocation()
    const pathname = history.pathname
    console.log(pathname)
    const userEmail = sessionStorage.getItem('email')

    function logOut() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('UserName');
        sessionStorage.removeItem('email');
        window.location = "/";
    }

    const arrayOfBlocks = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], }
    // let blocks1 = []
    // let blocks2 = []
    // let blocks3 = []
    // let blocks4 = []
    // let blocks5 = []
    // let blocks6 = []
    // let blocks7 = []
    // let blocks8 = []
    const loop = (array, height, delay) => {
        for (let i = 0; i < 10; i++) {
            array.push(
                (<div style={
                    { animation: `blockByBlock 750ms ease-in-out ${i * delay}ms forwards` }
                } key={i} className="blocks">
                    <img loading="eager" style={
                        { objectPosition: `${-i * 50}px ${height}px` }
                    } src={background} height="853" width="1280" alt=" a chilly plant" />
                </div>)
            )
        }
    }
   


    useEffect(()=>{

    },[])

    return (
        <div>
            <div className="backgroundImage">
                {/* <img loading="eager" src={background} height="853" width="1280" alt=" a chilly plant" /> */}
                {/* {populateArrays()} */}
                {loop(arrayOfBlocks[1], 0, 50)}
                {arrayOfBlocks[1].map((a) => (
                    a
                ))}

                {loop(arrayOfBlocks[2], -50, 100)}
                {arrayOfBlocks[2].map((a) => (
                    a
                ))}

                {loop(arrayOfBlocks[3], -100, 150)}
                {arrayOfBlocks[3].map((a) => (
                    a
                ))}

                {loop(arrayOfBlocks[4], -150, 200)}
                {arrayOfBlocks[4].map((a) => (
                    a
                ))}

                {loop(arrayOfBlocks[5], -200, 250)}
                {arrayOfBlocks[5].map((a) => (
                    a
                ))}

                {loop(arrayOfBlocks[6], -250, 300)}
                {arrayOfBlocks[6].map((a) => (
                    a
                ))}

                {loop(arrayOfBlocks[7], -300, 350)}
                {arrayOfBlocks[7].map((a) => (
                    a
                ))}

                {loop(arrayOfBlocks[8], -350, 400)}
                {arrayOfBlocks[8].map((a) => (
                    a
                ))}
            </div>
            {pathname === "/signin" || pathname === "/newsauce" || pathname === "/signup" ? <></>
                : <div className="logInLogOutButtons">
                    {!sessionStorage.getItem('token') ?
                        <Link to={"/signin"}>
                            <div className="logout">
                                <button>Log in <span>{logInIcon}</span></button>
                            </div>
                        </Link>
                        : <div className="logout">
                            <button onClick={logOut}>Log&nbsp;out <span>{logOutIcon}</span></button>
                        </div>}
                </div>}
            {sessionStorage.getItem('token') ? <div className="userNameDisplay"> <p>Logged in: {userEmail}</p> </div> : <></>}
            <div className="header">
                {/* <div className="logo"> <img src={logo} height="100"  alt="A flame, the logo of Piiquante" /></div> */}
                <Link to="/" className="title">
                    <h1>HOT TAKES</h1>
                    {/* <p>THE WEB'S BEST HOT SAUCE REVIEWS</p> */}
                </Link>
                {/* <div className="logo"> <img src={logo} height="100" alt="A flame, the logo of Piiquante" /></div> */}
            </div>
        </div>

    )
}
export default NavBar