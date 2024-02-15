import { BannerRest, TitleCuisine, TitleRest } from './styles'
import imageRest from '../../assets/images/cover.png'

type Props = {
  image: string
  cuisine: string
  title: string
}

const SecondBanner = ({ image, cuisine, title }: Props) => (
  <BannerRest
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`
    }}
  >
    <div className="container">
      <TitleCuisine>{cuisine}</TitleCuisine>

      <TitleRest>{title}</TitleRest>
    </div>
  </BannerRest>
)

export default SecondBanner
