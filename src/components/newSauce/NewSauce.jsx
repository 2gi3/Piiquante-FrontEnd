import "./newSauce.css"
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
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
    const[updateSauceButton, setUpdateSauceButton] =useState('')
    const[createSauceButton, setCreateSauceButton] =useState('')
    const params = useParams()


    const createSauce = (e) => {
		e.preventDefault()

        const dataObj = {
            userId,
            name:title,
            manufacturer,
            description,
            mainPepper,
            heat
        }

        const data = new FormData()
        data.append("sauce", JSON.stringify(dataObj))
        data.append("image", imageUrl)
        console.log("formData" , dataObj)

        axios.post("http://localhost:3000/api/sauces", data,
		{
			headers: {
			  'Authorization': `token ${access_token}`
			}
		  })
			.then(
				(res) => {
					console.log('sauce created');

				})
			.catch((err) => {
				console.log(err);
			});

		window.location = "/";
	}

    const updateSauce=(e)=>{
        // only works if all fields are filled in the form
        //when new picture is added, old picture is not deleted from directory (but new picture is displaied correctly in the browser)
        e.preventDefault()

        const dataObj = {
            userId,
            name:title,
            manufacturer,
            description,
            mainPepper,
            heat
        }

        const data = new FormData()
        data.append("sauce", JSON.stringify(dataObj))
        data.append("image", imageUrl)
        console.log("formData" , dataObj)

        axios.put(`http://localhost:3000/api/sauces/${params.id}`, data,
        {
            headers: {
                'Authorization': `token ${access_token}`
            }
        }) .then(response => console.log('Sauce updated'))
        .catch(error => {
            console.log(error.message);
            console.error('There was an error!', error);
        })

        window.location = `/saucepage/${params.id}`

    }

    useEffect(() => {
        params.id == undefined? setUpdateSauceButton('vanish')
        : setCreateSauceButton('vanish')

    }, [])
    


    return (
        <div className="row d-flex justify-content-center" >
            <div className="innerContainer">
                <form>
                    <p>Every input field must be filled</p>
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
                        <button id={createSauceButton} className="signInButton sauceButton " type="submit" value="submit"
                         onClick={event => createSauce(event)}>
                            <span>Create sauce</span>
                        </button>
                        <button id={updateSauceButton}  className="signInButton sauceButton " type="submit" value="submit"
                         onClick={event => updateSauce(event)}>
                            <span>Update sauce</span>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default NewSauce