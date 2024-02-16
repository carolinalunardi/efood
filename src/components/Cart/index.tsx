import { ButtonAdd } from '../Button/styles'
import {
  CartContainer,
  Overlay,
  Sidebar,
  Total,
  Item,
  TrashIcon
} from './styles'

import pizza from '../../assets/images/pizza.png'
import lixeira from '../../assets/images/lixeira.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          <Item>
            <img src={pizza} alt="pizza" />
            <div>
              <h3>Pizza Marguerita</h3>
              <p>R$ 60,90</p>
              <TrashIcon>
                <img
                  src={lixeira}
                  alt="ícone para deletar produto do carrinho"
                />
              </TrashIcon>
            </div>
          </Item>
          <Item>
            <img src={pizza} alt="pizza" />
            <div>
              <h3>Pizza Marguerita</h3>
              <p>R$ 60,90</p>
              <TrashIcon>
                <img
                  src={lixeira}
                  alt="ícone para deletar produto do carrinho"
                />
              </TrashIcon>
            </div>
          </Item>
        </ul>

        <Total>
          <p>Valor total</p>
          <p>R$ 182,70</p>
        </Total>
        <ButtonAdd>Continuar com a entrega</ButtonAdd>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
