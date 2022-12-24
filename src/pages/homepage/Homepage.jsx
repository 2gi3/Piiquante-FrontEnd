// import './homepage.scss'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from '../../components/navBar/NavBar'
import SauceCard from '../../components/sauceCard/SauceCard'
import Error from '../../components/error/Error'
import { Gallery, Loader } from '../../styles/styledComponents'

function Homepage() {
  // const access_token = sessionStorage.getItem('token');
  const [dataLoading, setDataLoading] = useState(false)
  const [sauces, setSauces] = useState([''])
  const userId = sessionStorage.getItem('userId')
  const [error, setError] = useState(null)

  const getSauces = async () => {
    setError(null)
    setDataLoading(true)
    try {
      const res = await axios.get(
        'https://secure-harbor-62492.herokuapp.com/api/sauces'
      )
      setSauces(res.data)
      console.log(sauces)
    } catch (error) {
      console.log(error)
      setError(error.message)
    } finally {
      setDataLoading(false)
    }
  }

  useEffect(() => {
    getSauces()
  }, [])

  return (
    <main>
      <NavBar />
      {dataLoading ? (
        <Loader />
      ) : error ? (
        <Error handleClick={getSauces} />
      ) : (
        <Gallery>
          {sauces.map((data, index) => (
            <SauceCard
              key={index}
              URI={data._id}
              image={data.imageUrl}
              name={data.name}
              heat={data.heat}
              userId={data.userId}
            />
          ))}
        </Gallery>
      )}
    </main>
  )
}

export default Homepage
