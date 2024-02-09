import Hero from '../../components/Hero'
import PlacesList from '../../components/PlacesList'
import Restaurant from '../../models/Restaurant'

import sushi from '../../assets/images/sushi.png'
import pasta from '../../assets/images/pasta.png'

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
    image: pasta,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    resume:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: '4.6'
  },
  {
    id: 2,
    image: pasta,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    resume:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: '4.6'
  },
  {
    id: 4,
    image: sushi,
    infos: ['Japonesa'],
    title: 'Hioki Sushi',
    resume:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    rating: '4.9'
  },
  {
    id: 5,
    image: sushi,
    infos: ['Japonesa'],
    title: 'Hioki Sushi',
    resume:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    rating: '4.9'
  },
  {
    id: 2,
    image: pasta,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    resume:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: '4.6'
  }
]

const Home = () => (
  <>
    <Hero />
    <PlacesList restaurants={listPlaces} />
  </>
)

export default Home
