import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'

import { useGetMenuQuery } from '../../services/api'
import Cart from '../../components/Cart'

const Profile = () => {
  const { id } = useParams()
  const { data: menu } = useGetMenuQuery(id!)

  if (!menu) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <Banner image={menu.capa} cuisine={menu.tipo} title={menu.titulo} />
      <ProductsList foods={menu.cardapio} />
      <Cart />
    </>
  )
}

export default Profile
