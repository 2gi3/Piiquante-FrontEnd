import "./footer.scss"
import { Link, useParams, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons' 


function Footer() {
    return( 
        <>
        <div className="footerContainer">
            <div className="footerInnerContainer" >
                <a href="mailto:gippolito@hotmail.co.uk?subject=PIIQUANTE-feedback from the website's footer">Send a feedback about this website.</a>
                <p>Website by: Giuseppe Ippolito.</p>
            </div> 
        </div>
        </>
    )

}

export default Footer