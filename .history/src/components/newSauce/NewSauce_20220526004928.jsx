import "./newSauce.css"
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faKey,} from '@fortawesome/free-solid-svg-icons'

function NewSauce() {
    const access_token = sessionStorage.getItem('token')
    const userId = sessionStorage.getItem('userId')
    const [title, setTitle] = useState('')
    const [manufacturer, setManifacturer] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [mainPepper, setMainPepper] =useState('')
    const [heat, setHeat] = useState(0)


    const createSauce = (e) => {
		e.preventDefault()

        let formData = new FormData();
		formData.append(
            'userId', "this is a test string"
        )
        formData.append(
            'name', title
        )
        formData.append(
            'manufacturer', manufacturer
        )
        formData.append(
            'description', description
        )
        formData.append(
            'image', imageUrl
        )
        formData.append(
            'mainPepper', mainPepper
        )
        formData.append(
            'heat', heat
        )


    axios.post("http://localhost:3001/api/sauces", formData,
			)
			.then(
				(res) => {
					console.log(res);

				})
			.catch((err) => {
				console.log("eroooooooor"));
			});

		// window.location = "/";
	}
    


    return (
        <div className="row d-flex justify-content-center" >
            <div className="innerContainer">
                <form
                onSubmit={event => createSauce(event)}
                >
                    <div className="inputBox">
                        <input type="text" name="name" placeholder="name"
                        onChange={event => setTitle(event.target.value)}
                        />
                        <div className="icon">
                            {/* <FontAwesomeIcon icon={faArrowRightToBracket} /> */}
                        </div>
                        {/* <h1>{emailInvalid}</h1> */}
                    </div>

                    <div className="inputBox">
                        <input type="text" name="manufacturer" placeholder="manufacturer"
                        onChange={event => setManifacturer(event.target.value)}
                        />
                        <div className="icon">
                            {/* <FontAwesomeIcon icon={faKey} /> */}
                        </div>
                        {/* <h1>{passwordWarning}</h1> */}
                    </div>
                    <div className="inputBox">
                        <input className='description' type="text" name="description" placeholder="description"
                        onChange={event => setDescription(event.target.value)}
                        />
                        <div className="icon">
                            {/* <FontAwesomeIcon icon={faArrowRightToBracket} /> */}
                        </div>
                        {/* <h1>{emailInvalid}</h1> */}
                    </div>
                    <div className="addImageButton">
                            <input className="signInButton sauceButton "type="file" name="imageUrl" placeholder="imageUrl"
                                onChange={event => setImageUrl(event.target.files[0])}
                                accept="image/png, image/jpeg, image/jpg, image/webp">
                            </input>
                    </div>
                    <div className="inputBox">
                        <input type="text" name="mainPepperIngredient" placeholder="Main pepper ingrediend"
                        onChange={event => setMainPepper(event.target.value)}
                        />
                        <div className="icon">
                            {/* <FontAwesomeIcon icon={faArrowRightToBracket} /> */}
                        </div>
                        {/* <h1>{emailInvalid}</h1> */}
                    </div>
                    {/* formcontrolname="heat"  */}
                    <div className="inputRange">
                        <input type="range"  min="0" max="10" name="heat" placeholder="0"
                        onInput={((e)=>{setHeat(e.target.value)})}
                        onChange={event => setHeat(event.target.value)}
                        />
                         <output>{heat}</output>
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