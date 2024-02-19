import { Link } from 'react-router-dom'

import banner from '../../assets/images/banner.png'
import logo from '../../assets/images/logo.svg'

import { ContentBanner, ImageBanner, CartButton, TitleHeader } from './styles'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Banner = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <ImageBanner style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <ContentBanner>
          <TitleHeader href="/">Restaurantes</TitleHeader>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <CartButton onClick={openCart}>
            {items.length} produto(s) no carrinho
          </CartButton>
        </ContentBanner>
      </div>
    </ImageBanner>
  )
}

export default Banner
