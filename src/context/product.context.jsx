import { createContext, useState } from 'react'
import PRODUCTS from '../data/products-data.json';
export const ProductContext = createContext({
  products: []
})

export const ProductProvider = ({children}) => {
  const [products, setProducts] = useState(PRODUCTS)

  const value = {products}
  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}