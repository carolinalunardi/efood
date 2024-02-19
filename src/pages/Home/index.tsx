import Hero from '../../components/Hero'
import PlacesList from '../../components/PlacesList'

import { useGetRestaurantQuery } from '../../services/api'

const Home = () => {
  const { data } = useGetRestaurantQuery()

  if (data) {
    return (
      <>
        <Hero />
        <PlacesList restaurants={data} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
