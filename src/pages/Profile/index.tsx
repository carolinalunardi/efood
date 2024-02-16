import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'

import { Restaurant } from '../Home'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const { id } = useParams()

  const [product, setProduct] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res))
  }, [id])

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
    </>
  )
}

export default Profile
