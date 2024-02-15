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

import Restaurant from '../../pages/Home'

type Props = {
  image: string
  infos: string
  title: string
  resume: string
  rating: number
  id: number
}

const Place = ({ image, infos, title, resume, rating, id }: Props) => {
  const getDescription = (descricao: string) => {
    if (descricao.length > 200) {
      return descricao.slice(0, 195) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <img src={image} alt={title} />
      <TagsContainer>
        <Tag>{infos}</Tag>
      </TagsContainer>
      <InfosContainer>
        <Infos>
          <h3>{title}</h3>
          <Rating>
            <h3>{rating}</h3>
            <img src={star} />
          </Rating>
        </Infos>
        <Description>{getDescription(resume)}</Description>
        <Button
          type="link"
          to={`/place/${id}`}
          title={'Clique aqui para mais informações sobre o restaurante'}
        >
          Saiba mais
        </Button>
      </InfosContainer>
    </Card>
  )
}

export default Place
