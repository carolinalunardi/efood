import Product from '../Product'
import { List, Container } from './styles'

import { Restaurant } from '../../pages/Home'

export type Props = {
  foods: Restaurant
}

const ProductsList = ({ foods }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {foods.cardapio.map((cardapio) => (
            <li key={cardapio.id}>
              <Product
                image={cardapio.foto}
                title={cardapio.nome}
                description={cardapio.descricao}
                portion={cardapio.porcao}
                price={cardapio.preco}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
