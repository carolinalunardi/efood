import { ButtonAdd } from '../Button/styles'
import { CardProduct, Content, Modal, ModalContent } from './styles'
import fechar from '../../assets/images/close.png'

import { useState } from 'react'

export type Props = {
  image: string
  title: string
  description: string
  portion: string
  price: number
}

const Product = ({ image, title, description, portion, price }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const getDescription = (descricao: string) => {
    if (descricao.length > 200) {
      return descricao.slice(0, 120) + '...'
    }
    return descricao
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const formatefPrice = formatPrice(price)

  return (
    <>
      <CardProduct>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{getDescription(description)}</p>
        <ButtonAdd onClick={() => setModalIsOpen(true)}>
          Adicionar ao carrinho
        </ButtonAdd>
      </CardProduct>
      <Modal className={modalIsOpen ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <img
              src={fechar}
              alt="ícone de fechar"
              onClick={() => setModalIsOpen(false)}
            />
          </header>
          <Content>
            <img src={image} alt={title} />
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
              <p>Serve: {portion}</p>
              <div className="button">
                <ButtonAdd>Adicionar ao carrinho - {formatefPrice}</ButtonAdd>
              </div>
            </div>
          </Content>
        </ModalContent>
        <div className="overlay" onClick={() => setModalIsOpen(false)}></div>
      </Modal>
    </>
  )
}
export default Product
