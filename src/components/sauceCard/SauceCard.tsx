import React from 'react'
import { Link } from 'react-router-dom'
import { SauceCardContainer } from './sauceCardStyledComponents.ts'

const SauceCard = (data) => {
  const userId = sessionStorage.getItem('userId')

  return (
    <SauceCardContainer
    //   className={
    //     data.userId === userId ? 'sauceBox sauceBoxOwnSauce' : 'sauceBox'
    //   }
    >
      <Link to={`saucepage/${data.URI}`}>
        <div>
          <img src={data.image} height="150" width="150" alt=" a sauce" />
        </div>
        <div>
          <h2>{data.name}</h2>
          <p>Heat: {data.heat}/10</p>
        </div>
      </Link>
    </SauceCardContainer>
  )
}

export default SauceCard
