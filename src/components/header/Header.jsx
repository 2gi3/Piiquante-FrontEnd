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
    let windowWidth={
        size: 0
    }
    // let viewWidthFractioned 
    // const [viweWidth, setViewWidth] = useState(windowWidth.size)
    // const [viweWidth, setViewWidth] = useState()
    // let viweWidth
const [test, setTest] =useState(0)
    if (typeof window !== "undefined") {
        windowWidth.size = window.innerWidth
        window.addEventListener('resize', () => {
        windowWidth.size = window.innerWidth
        setTest(windowWidth.size)
        console.log(windowWidth.size)
        })
    }

    const loop = (array, height, delay) => {
        for (let i = 0; i < 10; i++) {
            array.push(
                (<div style={
                    { animation: `blockByBlock 750ms ease-in-out ${i * delay}ms forwards` }
                } key={i} className="blocks">
                    <img loading="eager" style={
                        { objectPosition: `${-i * test/10 }px ${height}px` }
                    } src={background} height="853" width="1280" alt=" a chilly plant" />
                </div>)
            )
        }
        
    }

    useEffect(()=>{
        if (typeof window !== "undefined") {
            windowWidth.size = window.innerWidth
            setTest(windowWidth.size)
        }

    },[windowWidth.size])


    return (
        <div>
            <style jsx>{`
              .backgroundImage {
                width: ${test}px;
              }
              .backgroundImage .blocks {
                    width: ${test/10}px;
                    outline: 1px solid black;
                        // height: 50px;
                }
                .backgroundImage .blocks img {
                    width: ${test}px;
                }
            
            
            `}</style>
            <div className="backgroundImage">
                {/* <img loading="eager" src={background} height="853" width="1280" alt=" a chilly plant" /> */}

                {loop(arrayOfBlocks[1], 0, 50)}
                {loop(arrayOfBlocks[2], -50, 100)}
                {loop(arrayOfBlocks[3], -100, 150)}
                {loop(arrayOfBlocks[4], -150, 200)}
                {loop(arrayOfBlocks[5], -200, 250)}
                {loop(arrayOfBlocks[6], -250, 300)}
                {loop(arrayOfBlocks[7], -300, 350)}
                {loop(arrayOfBlocks[8], -350, 400)}

                {arrayOfBlocks[1].map((a) => (
                    a
                ))}
                {arrayOfBlocks[2].map((a) => (
                    a
                ))}
                {arrayOfBlocks[3].map((a) => (
                    a
                ))}
                {arrayOfBlocks[4].map((a) => (
                    a
                ))}
                {arrayOfBlocks[5].map((a) => (
                    a
                ))}
                {arrayOfBlocks[6].map((a) => (
                    a
                ))}
                {arrayOfBlocks[7].map((a) => (
                    a
                ))}
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
                    <p>{test}</p>
                    {/* <p>THE WEB'S BEST HOT SAUCE REVIEWS</p> */}
                </Link>
                {/* <div className="logo"> <img src={logo} height="100" alt="A flame, the logo of Piiquante" /></div> */}
            </div>
        </div>

    )
}
export default NavBar