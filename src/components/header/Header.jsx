import "./header.scss"
import logo from "../../assets/images/flame.png"
import background from "../../assets/images/chillyLarge.webp"
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

    const arrayOfBlocks = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], }
    let windowWidth = {
        size: 0
    }
    let windowHeight = {
        size: 0
    }
    const [blockHeight, setBlockHeight] = useState(0)
    const [blockWidth, setBlockWidth] = useState(0)
    useEffect(() => {
        windowWidth.size = window.innerWidth
        setBlockWidth(windowWidth.size)
        windowHeight.size = window.innerHeight
        setBlockHeight(windowHeight.size)
    },[])
    window.addEventListener('resize', () => {
        windowWidth.size = window.innerWidth
        setBlockWidth(windowWidth.size)
        windowHeight.size = window.innerHeight
        setBlockHeight(windowHeight.size)
    })

    const loop = (array,height, delay) => {
        for (let i = 0; i < 10; i++) {
            let animationSpeed = 3000
            if(i===1 || i===4 || i===8){
                animationSpeed = 1000
            }else if(i===2 || i===5 || i===9){
                animationSpeed = 750
            }else{ animationSpeed = 2000}
            array.push(
                (<div style={ 
                    { animation: `blockByBlock ${(i*100) + animationSpeed}ms ease-in-out ${((delay)) }ms forwards` }
                } key={i} className="blocks">
                    <img loading="eager" style={
                        { objectPosition: `${-i* blockWidth / 10}px ${-height}px` }
                    } src={background} height={`${blockHeight}`} width="1280" alt=" a chilly plant" />
                </div>)
            )
        }

    }




    return (
        <div>
            <style jsx>{`
              .backgroundImage {
                width: ${blockWidth}px;
              }
              .backgroundImage .blocks {
                    width: ${blockWidth / 10}px;
                    height: ${blockHeight/10}px;
                }
                .backgroundImage .blocks img {
                    width: ${blockWidth}px;
                }
            
            
            `}</style>
            <div className='backgroundImageContainer'>
                <div className="backgroundImage">
                    {/* <img loading="eager" src={background} height="853" width="1280" alt=" a chilly plant" /> */}

                    {loop(arrayOfBlocks[1],(blockHeight/10), 500)}
                    {loop(arrayOfBlocks[2],(blockHeight/10) *2, 1500)}
                    {loop(arrayOfBlocks[3],(blockHeight/10) *3, 1000)}
                    {loop(arrayOfBlocks[4],(blockHeight/10) *4, 750)}
                    {loop(arrayOfBlocks[5],(blockHeight/10) *5, 1750)}
                    {loop(arrayOfBlocks[6],(blockHeight/10) *6, 1250)}
                    {loop(arrayOfBlocks[7],(blockHeight/10) *7, 1000)}
                    {loop(arrayOfBlocks[8],(blockHeight/10) *8, 2000)}
                    {loop(arrayOfBlocks[9],(blockHeight/10) *9, 1500)}
                    {/* {loop(arrayOfBlocks[10],(blockHeight/10) *10, 450)} */}

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
                    {arrayOfBlocks[9].map((a) => (
                        a
                    ))}
                    {/* {arrayOfBlocks[10].map((a) => (
                        a
                    ))} */}
                </div>
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
                    {/* <p>{blockWidth}</p> */}
                    {/* <p>{blockHeight}</p> */}
                </Link>
                {/* <div className="logo"> <img src={logo} height="100" alt="A flame, the logo of Piiquante" /></div> */}
            </div>
            <div className="slogan">
                    <p>THE WEB'S BEST HOT SAUCE REVIEWS</p>
                    </div>
        </div>

    )
}
export default NavBar