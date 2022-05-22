import "./saucePage.css"
import React, { useEffect, useState, } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'


function SaucePage() {
    const like = <FontAwesomeIcon icon={faThumbsUp} />
    const dislike = <FontAwesomeIcon icon={faThumbsDown} />

    const access_token = sessionStorage.getItem('token');
    const params = useParams()
    const [sauce, setSauce] = useState('')



    const getSauce = async () => {
        const res = await axios.get(`https://secure-harbor-62492.herokuapp.com/api/sauces/${params.id}`,
            {
                headers: {
                    // 'Authorization': `token ${access_token}`
                    "Authorization": "token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Mjg3YjNiYzc0NjM4NzBjNWYxZWIwZjAiLCJpYXQiOjE2NTMxNDUxMjgsImV4cCI6MTY1MzIzMTUyOH0.vklux6sqge8HLX1OWnyS_ALfxHmQVyH5QncVDFtbvMQ"
                }
            })
        setSauce(await res.data)
        console.log(sauce)

    }

    useEffect(() => {
        getSauce()


    }, [])
    return (
        <div>

            <div className="sauceContainer">
                <div className="sauceImage">
                    <img alt="" src={sauce.imageUrl} />
                </div>
                <div className="sauceInfo">
                    <h1 className="sauce-name">{sauce.name}</h1>
                    <p className="manufacturer">{sauce.manifacturer}</p>
                    <h3>{sauce.description}</h3>
                    <p>{sauce.mainPepper}</p>
                    <div className="likeButtons">
                        <div className="thumbs">
                            <i>{like}</i>
                            <span>{sauce.likes}</span>
                        </div>
                        <div className="thumbs">
                            <i>{dislike}</i>
                            <span>{sauce.dislikes}</span>
                        </div>
                    </div>
                    <div className="controlButtons">
                        <button className="backButton sauceButton">
                            <span>BACK</span>
                        </button>
                        <div className="modifyDeleteButtons">
                            <button className="modifyButton sauceButton">
                                <span>MODIFY</span>
                            </button>
                            <button className="deleteButton sauceButton">
                                <span>DELETE</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default SaucePage