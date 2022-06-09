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
    const [sauce, setSauce] =useState('')
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
// if payload = data, then image must be changed in order to modify anything
// if payload = dataObj then everyting can be changed but the picture
        const data = new FormData()
        data.append("sauce", JSON.stringify(dataObj))
        data.append("image", imageUrl)
        // console.log("formData" , imageUrl)

        axios.put(`http://localhost:3000/api/sauces/${params.id}`, dataObj,
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

    const getSauce = async () => {
        const res = await axios.get(`http://localhost:3000/api/sauces/${params.id}`,
            {
                headers: {
                    'Authorization': `token ${access_token}`
                }
            })
        await console.log(imageUrl)
         setImageUrl(res.data.imageUrl)
         setTitle(res.data.name)
         setManifacturer(res.data.manufacturer)
         setDescription(res.data.description)
         setMainPepper(res.data.mainPepper)
         setHeat(res.data.heat)         
    }

    useEffect(() => {
        params.id == undefined? setUpdateSauceButton('vanish')
        : setCreateSauceButton('vanish')
          getSauce()    
    }, [])
    


    return (
        <div className="row d-flex justify-content-center" >
            <div className="innerContainer">
                <form>
                    <p>Every input field must be filled</p>
                    <div className="inputBox">
                        <label htmlFor="name"> Sauce name</label>
                        <input type="text" id="name" name="name" defaultValue={title}
                        onChange={event => setTitle(event.target.value)}
                        />
                        <div className="icon">
                            {/* <FontAwesomeIcon icon={faArrowRightToBracket} /> */}
                        </div>
                        {/* <h1>{emailInvalid}</h1> */}
                    </div>

                    <div className="inputBox">
                    <label htmlFor="manufacturer"> Manufacturer</label>
                        <input type="text" id="manufacturer" name="manufacturer" defaultValue={manufacturer}
                        onChange={event => setManifacturer(event.target.value)}
                        />
                        <div className="icon">
                            {/* <FontAwesomeIcon icon={faKey} /> */}
                        </div>
                        {/* <h1>{passwordWarning}</h1> */}
                    </div>
                    <div className="inputBox">
                    <label htmlFor="description"> Description</label>
                        <textarea id="description" className='description' type="text" name="description" defaultValue={description}
                        onChange={event => setDescription(event.target.value)}
                        ></textarea>
                        <div className="icon">
                            {/* <FontAwesomeIcon icon={faArrowRightToBracket} /> */}
                        </div>
                        {/* <h1>{emailInvalid}</h1> */}
                    </div>
                    <div className="addImageButton">
                            <input className="signInButton sauceButton "type="file" name="imageUrl" defaultfile={imageUrl}
                                onChange={event => setImageUrl(event.target.files[0])}
                                accept="image/png, image/jpeg, image/jpg, image/webp">
                            </input>
                    </div>
                    
                    <img height="100px" src={imageUrl} />
                    <div className="inputBox">
                    <label htmlFor="mainPepperIngredient"> Main pepper ingredient</label>
                        <input id="mainPepperIngredient" type="text" name="mainPepperIngredient" defaultValue={mainPepper}
                        onChange={event => setMainPepper(event.target.value)}
                        />
                        <div className="icon">
                            {/* <FontAwesomeIcon icon={faArrowRightToBracket} /> */}
                        </div>
                        {/* <h1>{emailInvalid}</h1> */}
                    </div>
                    {/* formcontrolname="heat"  */}
                    <div className="inputRange">
                    <label htmlFor="heat"> Heat</label>
                        <input id="heat" type="range"  min="0" max="10" name="heat" defaultValue={heat}
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