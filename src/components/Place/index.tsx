import Tag from '../Tag'

import star from '../../assets/images/star.svg'
import {
  Card,
  Description,
  Infos,
  InfosContainer,
  Rating,
  TagsContainer
} from './styles'
import Button from '../Button'

type Props = {
  image: string
  infos: string[]
  title: string
  resume: string
  rating: string
}

const Place = ({ image, infos, title, resume, rating }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <TagsContainer>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </TagsContainer>
    <InfosContainer>
      <Infos>
        <h3>{title}</h3>
        <Rating>
          <h3>{rating}</h3>
          <img src={star} />
        </Rating>
      </Infos>
      <Description>{resume}</Description>
      <Button
        type="link"
        to={'./place'}
        title={'Clique aqui para mais informações sobre o restaurante'}
      >
        Saiba mais
      </Button>
    </InfosContainer>
  </Card>
)

export default Place
