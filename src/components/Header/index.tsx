import { Link } from 'react-router-dom'

import banner from '../../assets/images/banner.png'
import logo from '../../assets/images/logo.svg'

import { ContentBanner, ImageBanner, TitleHeader } from './styles'

const Banner = () => (
  <ImageBanner style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <ContentBanner>
        <TitleHeader href="/">Restaurantes</TitleHeader>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <TitleHeader href="#">0 produto(s) no carrinho</TitleHeader>
      </ContentBanner>
    </div>
  </ImageBanner>
)

export default Banner
