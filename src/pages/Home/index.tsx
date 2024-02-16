import Hero from '../../components/Hero'
import PlacesList from '../../components/PlacesList'

import { useGetRestaurantQuery } from '../../services/api'

export type Restaurant = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

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
