import Restaurant from '../../models/Restaurant'
import Place from '../Place'
import { Container, List } from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const PlacesList = ({ restaurants }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <Place
            key={restaurant.id}
            image={restaurant.image}
            title={restaurant.title}
            resume={restaurant.resume}
            infos={restaurant.infos}
            rating={restaurant.rating}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default PlacesList
