import Place from '../Place'
import { Container, List } from './styles'
import { Restaurant } from '../../pages/Home'

export type Props = {
  restaurants: Restaurant[]
}

const PlacesList = ({ restaurants }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <Place
              id={restaurant.id}
              image={restaurant.capa}
              title={restaurant.titulo}
              resume={restaurant.descricao}
              infos={restaurant.tipo}
              rating={restaurant.avaliacao}
            />
          </li>
        ))}
      </List>
    </div>
  </Container>
)

export default PlacesList
