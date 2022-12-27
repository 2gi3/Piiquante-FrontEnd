// import './homepage.scss'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from '../../components/navBar/NavBar'
import SauceCard from '../../components/sauceCard/SauceCard'
import Error from '../../components/error/Error'
import { Gallery, Loader } from '../../styles/styledComponents'
import { useFetch } from '../../functions/hooks'
import { useNavigate } from 'react-router-dom'

function Homepage() {
  const userId = sessionStorage.getItem('userId')
  const navigate = useNavigate()
  const handleClick = () => {
    // navigate(0)
    window.location.reload(false)
  }

  const { data, isLoading, error } = useFetch(
    'https://secure-harbor-62492.herokuapp.com/api/sauces'
  )
  let sauces = data

  return (
    <main>
      <NavBar />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error handleClick={handleClick} />
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
