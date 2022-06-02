import "./saucePage.css"
import React, { useEffect, useState, } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'


function SaucePage() {
    const like = <FontAwesomeIcon icon={faThumbsUp} />
    const dislike = <FontAwesomeIcon icon={faThumbsDown} />

    const access_token = sessionStorage.getItem('token');
    const userId = sessionStorage.getItem('userId');
    let sauceCreator
    const params = useParams()
    const [sauce, setSauce] = useState('')
    const [liked, setLiked] =useState(0)

    const getSauce = async () => {
        const res = await axios.get(`http://localhost:3000/api/sauces/${params.id}`,
            {
                headers: {
                    'Authorization': `token ${access_token}`
                }
            })
        setSauce(await res.data)
        await console.log(sauce._id)
        setLiked(sauce.liked)
        sessionStorage.setItem("userLiked", sauce.userLiked)
        sessionStorage.setItem("userDisliked", sauce.userDisliked)

    }
    
    const deleteSauce = () => {
        axios.delete(`http://localhost:3000/api/sauces/${params.id}`,
            {
                headers: {
                    'Authorization': `token ${access_token}`
                }
            })
            .then(response => console.log('Delete successful'))
            .catch(error => {
                console.log(error.message);
                console.error('There was an error!', error);
            })
        window.location = "/"
    }

    const likeSauce=(e, likeValue)=>{
        e.preventDefault()
    setLiked(liked =>liked++)
        const data = {
            userId,
            // like to be made dynamic following the backend sauce controller
            // if like = 1 (1 like is added and the user id is added to likedArray)
            // if like = 0 (1 like is subtracted and the user id is deleted from likedArray)
            // if like = -1 (1 disLike is added and the user id is added to disLikedArray)
            like: likeValue
        }

        axios.post(`http://localhost:3000/api/sauces/${sauce._id}/like`, data,
		{
			headers: {
			  'Authorization': `token ${access_token}`
			}
		  })
			.then(
				(res) => {
					console.log('sauce liked');

				})
			.catch((err) => {
				console.log(err);
			});

    }
    





    useEffect(() => {
        getSauce()
        console.log(userId)
        sauceCreator = sauce.userId
        console.log(sauceCreator)


    }, [liked])
    return (
        <div>

            <div className="sauceContainer">
                <div className="sauceImage">
                    <img alt="" src={sauce.imageUrl} />
                </div>
                <div className="sauceInfo">
                    <h1 className="sauce-name">{sauce.name}</h1>
                    <h3 className="manufacturer">{sauce.manufacturer}</h3>
                    <p>{sauce.description}</p>
                    <p>{sauce.mainPepper}</p>
                    <div className="likeButtons">
                        <button className="thumbs" onClick={e => likeSauce(e,1)}>
                            <i>{like}</i>
                            <span>{sauce.likes}</span>
                        </button>
                        <button className="thumbs" onClick={e => likeSauce(e,-1)}>
                            <i>{dislike}</i>
                            <span>{sauce.dislikes}</span>
                        </button>
                    </div>
                    <div className="controlButtons">
                        <Link className="nav-link" to='/'>
                            <button className="backButton sauceButton">
                                <span>BACK</span>
                            </button>
                        </Link>
                        {sauce.userId === userId ?
                            <div className="modifyDeleteButtons">                                
                                <Link className="nav-link" to={`updatesauce/${params.id}`}>
                                <button className="modifyButton sauceButton">
                                    <span>MODIFY</span>
                                </button>
                                </Link>
                                <button className="deleteButton sauceButton" onClick={event => deleteSauce()}>
                                    <span>DELETE</span>
                                </button>
                            </div>
                            : <></>}
                    </div>
                </div>
            </div>


        </div>
    )
}
export default SaucePage