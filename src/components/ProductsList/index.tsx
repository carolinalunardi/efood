import Product from '../Product'
import { List, Container } from './styles'

type Props = {
  foods: Menu[]
}

const ProductsList = ({ foods }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {foods.map((item) => (
            <li key={item.id}>
              <Product
                id={item.id}
                nome={item.nome}
                foto={item.foto}
                descricao={item.descricao}
                porcao={item.porcao}
                preco={item.preco}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
