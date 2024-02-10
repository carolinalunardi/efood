import Product from '../Product'
import { List, Container } from './styles'

import Food from '../../models/Food'

export type Props = {
  foods: Food[]
}

const ProductsList = ({ foods }: Props) => (
  <Container>
    <div className="container">
      <List>
        {foods.map((food) => (
          <Product
            key={food.id}
            image={food.image}
            title={food.title}
            description={food.description}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
