import "./newSauce.css"
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faKey,} from '@fortawesome/free-solid-svg-icons'

function NewSauce() {
    const access_token = sessionStorage.getItem('token');
    const [heat, setHeat] = useState(0)

    const createSauce = (e) => {
		e.preventDefault();

        // let formData = new FormData
        // formData.append(
        //     'userId', userId
        // )
        // formData.append(
        //     'title', title
        // )
        // formData.append(
        //     'manufacturer', manufacturer
        // )
        // formData.append(
        //     'description', description
        // )
        // formData.append(
        //     'imageUrl', imageUrl
        // )
        // formData.append(
        //     'imageUrl', imageUrl.name
        // )
        // formData.append(
        //     'mainPepper', mmainPepper
        // )
        // formData.append(
        //     'heat', heat
        // )
    
    axios.post("https://murmuring-everglades-04934.herokuapp.com/api/posts",
    //  formData,
		{
			headers: {
			  'Authorization': `Basic ${access_token}`
			}
		  })
			.then(
				(res) => {
					console.log('post created');

				})
			.catch((err) => {
				console.log(err);
			});
		window.location = "/";
	}
    


    return (
        <div className="row d-flex justify-content-center" >
            <div className="innerContainer">
                <form
                // onSubmit={event => logIn(event)}
                >
                    <div className="inputBox">
                        <input type="text" name="name" placeholder="name"
                        // onChange={event => setEmail(event.target.value)}
                        />
                        <div className="icon">
                            {/* <FontAwesomeIcon icon={faArrowRightToBracket} /> */}
                        </div>
                        {/* <h1>{emailInvalid}</h1> */}
                    </div>

                    <div className="inputBox">
                        <input type="text" name="manufacturer" placeholder="manufacturer"
                        // onChange={event => setPassword(event.target.value)}
                        />
                        <div className="icon">
                            {/* <FontAwesomeIcon icon={faKey} /> */}
                        </div>
                        {/* <h1>{passwordWarning}</h1> */}
                    </div>
                    <div className="inputBox">
                        <input className='description' type="text" name="description" placeholder="description"
                        // onChange={event => setEmail(event.target.value)}
                        />
                        <div className="icon">
                            {/* <FontAwesomeIcon icon={faArrowRightToBracket} /> */}
                        </div>
                        {/* <h1>{emailInvalid}</h1> */}
                    </div>
                    <div className="addImageButton">
                            <input className="signInButton sauceButton "type="file" name="imageUrl" placeholder="imageUrl"
                                // onChange={event => setImageUrl(event.target.files[0])}
                                accept="image/png, image/jpeg, image/jpg, image/webp">
                            </input>
                    </div>
                    <div className="inputBox">
                        <input type="text" name="mainPepperIngredient" placeholder="Main pepper ingrediend"
                        // onChange={event => setEmail(event.target.value)}
                        />
                        <div className="icon">
                            {/* <FontAwesomeIcon icon={faArrowRightToBracket} /> */}
                        </div>
                        {/* <h1>{emailInvalid}</h1> */}
                    </div>
                    {/* formcontrolname="heat"  */}
                    <div className="inputRange">
                        <input type="range"  min="0" max="10" name="heat" placeholder="0"
                        // onChange={event => setEmail(event.target.value)}
                        onInput={((e)=>{setHeat(e.target.value)})}
                        />
                         <output>{heat}</output>

                        {/* <input id="rangeNumber"
                            formcontrolname="heatValue" type="number" disabled=""></input> */}

                        <div className="icon">
                            {/* <FontAwesomeIcon icon={faArrowRightToBracket} /> */}
                        </div>
                        {/* <h1>{emailInvalid}</h1> */}
                    </div>
                    <div className="addImageButton">
                        <button className="signInButton sauceButton " type="submit" value="submit">
                            <span>SUBMIT</span>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default NewSauce