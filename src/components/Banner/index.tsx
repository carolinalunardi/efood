import { BannerRest, TitleCuisine, TitleRest } from './styles'
import imageRest from '../../assets/images/cover.png'

const SecondBanner = () => (
  <BannerRest
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageRest})`
    }}
  >
    <div className="container">
      <TitleCuisine>Italiana</TitleCuisine>

      <TitleRest>La Dolce Vita Trattoria</TitleRest>
    </div>
  </BannerRest>
)

export default SecondBanner
