import "./footer.css"
import { Link, useParams, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons' 


function Footer() {
    return( 
        <>
        <div className="footerContainer">
            <div className="footerInnerContainer" >
                <p>Website by: Giuseppe Ippolito.</p>
            </div> 
        </div>
        </>
    )

}

export default Footer