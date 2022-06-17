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
    const [liked, setLiked] =useState('')
    const [userLiked, setUserLiked] =useState([])
    const [userDisliked, setUserDisliked] =useState([])

    const getSauce = async () => {
        const res = await axios.get(`https://secure-harbor-62492.herokuapp.com/api/sauces/${params.id}`,
            {
                headers: {
                    'Authorization': `token ${access_token}`
                }
            })
        setSauce(await res.data)
        setLiked(await sauce.liked)
        setUserLiked(JSON.stringify(sauce.userLiked))
        setUserDisliked(JSON.stringify(sauce.userDisliked))
    }
    
    const deleteSauce = () => {
        axios.delete(`https://secure-harbor-62492.herokuapp.com/api/sauces/${params.id}`,
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
        let history = userLiked.includes(userId )
        let dislikeHistory = userDisliked.includes(userId)
        let payloadValue
        console.log(dislikeHistory)
        console.log(userLiked)
        console.log(userDisliked)

    
       
       if(likeValue === 1){
           if(history === true){
            setLiked("changed")
            payloadValue = 0
           }else{
            setLiked("changed")
            payloadValue = likeValue
           }
       }else{
           if(dislikeHistory === true){
               setLiked("changed")
               payloadValue = 0
           }else{
               setLiked("changed")
               payloadValue = likeValue
           }

       }

        const data = {
            userId,
            like: payloadValue
        }

        axios.post(`https://secure-harbor-62492.herokuapp.com/api/sauces/${sauce._id}/like`, data,
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
                    {/* <div className="likeButtons">
                        <button className="thumbs" onClick={e => likeSauce(e,1)}>
                            <i>{like}</i>
                            <span>{sauce.likes}</span>
                        </button>
                        <button className="thumbs" onClick={e => likeSauce(e,-1)}>
                            <i>{dislike}</i>
                            <span>{sauce.dislikes}</span>
                        </button>
                    </div> */}
                    <div className="controlButtons">
                        <Link className="nav-link" to='/'>
                            <button className="backButton sauceButton">
                                <span>GO BACK</span>
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