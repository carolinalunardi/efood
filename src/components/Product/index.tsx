import { ButtonAdd } from '../Button/styles'
import { CardProduct } from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const Product = ({ image, title, description }: Props) => (
  <CardProduct>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <ButtonAdd>Adicionar ao carrinho</ButtonAdd>
  </CardProduct>
)

export default Product
