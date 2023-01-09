import React, { useContext } from 'react'
import NavBar from '../../components/navBar/NavBar.tsx'
import SauceCard from '../../components/sauceCard/SauceCard.tsx'
import Error from '../../components/error/Error.tsx'
import { Gallery, Loader } from '../../styles/styledComponents'
import { useFetch } from '../../functions/hooks.tsx'
import { UserContext } from '../../store/Context.tsx'
import { SauceInterface } from '../../types/interfaces'

function Homepage() {
  const { user2 } = useContext(UserContext)

  const handleClick = () => {
    window.location.reload()
  }

  const { data, isLoading, error } = useFetch<SauceInterface[]>(
    'https://secure-harbor-62492.herokuapp.com/api/sauces'
  )
  const sauces = data
  return (
    <main>
      <NavBar />
      {isLoading ? (
        <Loader data-testid="loader" />
      ) : error ? (
        <Error handleClick={handleClick} />
      ) : (
        <Gallery>
          {sauces?.map((data: SauceInterface, index: string) => (
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
