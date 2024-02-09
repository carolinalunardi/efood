import { ImageHero, Logo, Title } from './styles'
import imageHero from '../../assets/images/banner.png'
import logo from '../../assets/images/logo.svg'

const Hero = () => (
  <ImageHero style={{ backgroundImage: `url(${imageHero})` }}>
    <Logo src={logo} alt="logo" />
    <Title>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Title>
  </ImageHero>
)

export default Hero
