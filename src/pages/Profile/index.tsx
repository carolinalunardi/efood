import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'

import { useGetMenuQuery } from '../../services/api'
import Cart from '../../components/Cart'

const Profile = () => {
  const { id } = useParams()
  const { data: product } = useGetMenuQuery(id!)

  if (!product) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <Banner
        image={product.capa}
        cuisine={product.tipo}
        title={product.titulo}
      />
      <ProductsList foods={product} />
      <Cart />
    </>
  )
}

export default Profile
