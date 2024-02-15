import { ButtonAdd } from '../Button/styles'
import { CardProduct, Content, Modal, ModalContent } from './styles'
import fechar from '../../assets/images/close.png'
import pizza from '../../assets/images/pizza.png'
import { useState } from 'react'

export type Props = {
  image: string
  title: string
  description: string
  info?: string
}

const Product = ({ image, title, description, info }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <>
      <CardProduct>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
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
            <img src={pizza} alt="pizza" />
            <div>
              <h3>Pizza Marguerita</h3>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião.
              </p>
              <p>Serve: de 2 a 3 pessoas</p>
              <div className="button">
                <ButtonAdd>Adicionar ao carrinho - R$ 60,90</ButtonAdd>
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
