import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {
  AddImageButton,
  InputBox,
  NewSauceContainer,
  InputRange,
} from './newSauceStyledComponents'
import colors from '../../styles/colors'

function NewSauce() {
  const access_token = sessionStorage.getItem('token')
  const userId = sessionStorage.getItem('userId')
  const [title, setTitle] = useState('')
  const [manufacturer, setManifacturer] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState<any>('')
  const [mainPepper, setMainPepper] = useState('')
  const [heat, setHeat] = useState(0)
  const [updateSauceButton, setUpdateSauceButton] = useState('')
  const [createSauceButton, setCreateSauceButton] = useState('')
  const [sauce, setSauce] = useState('')
  const params = useParams()
  const [imageChanged, setImageChanged] = useState(false)
  const [imagePreview, setImagePreview] = useState<any>()
  const [logInResponse, setLogInResponse] = useState('hidden')

  const createSauce = (e) => {
    e.preventDefault()
    if (
      title === '' ||
      manufacturer === '' ||
      description === '' ||
      mainPepper === ''
    ) {
      setLogInResponse('appear')
    } else {
      const dataObj = {
        userId,
        name: title,
        manufacturer,
        description,
        mainPepper,
        heat,
      }

      const data = new FormData()
      data.append('sauce', JSON.stringify(dataObj))
      data.append('image', imageUrl)
      console.log('formData', dataObj)
      console.log(data)

      axios
        .post('https://secure-harbor-62492.herokuapp.com/api/sauces', data, {
          headers: {
            Authorization: `token ${access_token}`,
          },
        })
        .then((res) => {
          console.log('sauce created')
          window.location.href = '/'
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  const updateSauce = (e) => {
    e.preventDefault()

    const dataObj = {
      userId,
      name: title,
      manufacturer,
      description,
      mainPepper,
      heat,
    }

    const data = new FormData()
    data.append('sauce', JSON.stringify(dataObj))
    data.append('image', imageUrl)

    let payLoad
    if (imageChanged === false) {
      payLoad = dataObj
    } else {
      payLoad = data
    }

    axios
      .put(
        `https://secure-harbor-62492.herokuapp.com/api/sauces/${params.id}`,
        payLoad,
        {
          headers: {
            Authorization: `token ${access_token}`,
          },
        }
      )
      .then((response) => console.log('Sauce updated'))
      .then(() => (window.location.href = `/saucepage/${params.id}`))
      .catch((error) => {
        console.log(error.message)
        console.error('There was an error!', error)
      })
  }

  const getSauce = async () => {
    const res = await axios.get(
      `https://secure-harbor-62492.herokuapp.com/api/sauces/${params.id}`,
      {
        headers: {
          Authorization: `token ${access_token}`,
        },
      }
    )
    await console.log(imageUrl)
    setImageUrl(res.data.imageUrl)
    setTitle(res.data.name)
    setManifacturer(res.data.manufacturer)
    setDescription(res.data.description)
    setMainPepper(res.data.mainPepper)
    setHeat(res.data.heat)
  }

  useEffect(() => {
    params.id == undefined
      ? setUpdateSauceButton('vanish')
      : setCreateSauceButton('vanish')
    getSauce()
  }, [])

  function getImgData() {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(imageUrl)
    fileReader.addEventListener('load', function () {
      setImagePreview(this.result)
    })
  }

  return (
    <NewSauceContainer
      mainColor={colors.secondaryColor}
      minorColor={colors.primaryColor}
    >
      <div>
        <form>
          <p>Every input field must be filled</p>
          <InputBox>
            <label htmlFor="name"> Sauce name</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            {/* <h1>{emailInvalid}</h1> */}
          </InputBox>

          <InputBox>
            <label htmlFor="manufacturer"> Manufacturer</label>
            <input
              type="text"
              id="manufacturer"
              name="manufacturer"
              defaultValue={manufacturer}
              onChange={(event) => setManifacturer(event.target.value)}
            />
            {/* <h1>{passwordWarning}</h1> */}
          </InputBox>
          <InputBox>
            <label htmlFor="description"> Description</label>
            <textarea
              id="description"
              // type="text"
              name="description"
              defaultValue={description}
              onChange={(event) => setDescription(event.target.value)}
            ></textarea>
            {/* <h1>{emailInvalid}</h1> */}
          </InputBox>
          <AddImageButton
            mainColor={colors.secondaryButton}
            minorColor={colors.primaryColor}
          >
            <input
              type="file"
              name="imageUrl"
              onInput={(event: any) => {
                setImageUrl(event.target.files[0])
              }}
              onChange={(e) => {
                setImageChanged(true)
                getImgData()
              }}
              accept="image/png, image/jpeg, image/jpg, image/webp"
            ></input>
          </AddImageButton>
          {params.id == undefined ? (
            <img height="100px" src={imagePreview} />
          ) : imageChanged == true ? (
            <img height="100px" src={imagePreview} />
          ) : (
            <img height="100px" src={imageUrl} />
          )}

          {/* <img height="100px" src={imagePreview} /> */}
          <InputBox>
            <label htmlFor="mainPepperIngredient"> Main ingredient</label>
            <input
              id="mainPepperIngredient"
              type="text"
              name="mainPepperIngredient"
              defaultValue={mainPepper}
              onChange={(event) => setMainPepper(event.target.value)}
            />
            {/* <h1>{emailInvalid}</h1> */}
          </InputBox>
          {/* formcontrolname="heat"  */}
          <InputRange>
            <label htmlFor="heat"> Heat</label>
            <input
              id="heat"
              type="range"
              min="0"
              max="10"
              name="heat"
              defaultValue={heat}
              onInput={(e: any) => {
                setHeat(e.target.value)
              }}
              onChange={(event: any) => setHeat(event.target.value)}
            />
            <output>{heat}</output>
            {/* <h1>{emailInvalid}</h1> */}
          </InputRange>
          <AddImageButton
            mainColor={colors.secondaryColor}
            minorColor={colors.tertiaryColor}
          >
            <button
              id={createSauceButton}
              type="submit"
              value="submit"
              onClick={(event) => createSauce(event)}
            >
              <span>Create sauce</span>
            </button>
            <button
              id={updateSauceButton}
              type="submit"
              value="submit"
              onClick={(event) => updateSauce(event)}
            >
              <span>Update sauce</span>
            </button>
          </AddImageButton>
        </form>
        <div className={logInResponse}>
          <p> Please fill in all the text input fields </p>
        </div>
      </div>
    </NewSauceContainer>
  )
}

export default NewSauce
