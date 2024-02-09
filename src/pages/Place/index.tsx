import Hero from '../../components/Hero'
import PlacesList from '../../components/PlacesList'
import Restaurant from '../../models/Restaurant'

import sushi from '../../assets/images/sushi.png'

const listPlaces: Restaurant[] = [
  {
    id: 1,
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    resume:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    rating: '4.9'
  },
  {
    id: 2,
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    resume:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    rating: '4.9'
  }
]

const Place = () => (
  <>
    <Hero />
    <PlacesList restaurants={listPlaces} />
  </>
)

export default Place
