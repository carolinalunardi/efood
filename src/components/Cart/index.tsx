import { ButtonAdd } from '../Button/styles'
import {
  CartContainer,
  Overlay,
  Sidebar,
  Total,
  Item,
  TrashIcon
} from './styles'

import lixeira from '../../assets/images/lixeira.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { getTotalPrice, priceBRL } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <Item key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>{priceBRL(item.preco)}</p>
                <TrashIcon>
                  <img
                    onClick={() => removeItem(item.id)}
                    src={lixeira}
                    alt="ícone para deletar produto do carrinho"
                  />
                </TrashIcon>
              </div>
            </Item>
          ))}
        </ul>
        <Total>
          <p>Valor total</p>
          <p>{priceBRL(getTotalPrice(items))}</p>
        </Total>
        <ButtonAdd>Continuar com a entrega</ButtonAdd>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
