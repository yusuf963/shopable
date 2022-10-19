import {useContext} from 'react'
import { Product } from '../../components/products/Product'
import { ProductContext } from '../../context/product.context'
import './Shop.scss'

export const Shop = () => {
  const {products} = useContext(ProductContext)
  return (
    <div className='products-container'>
      {
        products.map((product) => {
          return <Product key={product.id} product={product} />
       })
      }

    </div>
  )
}