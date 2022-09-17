import { Routes, Route } from 'react-router-dom'
import { Navigation } from './components/navigation/Navigation'
import { Home } from './pages/home/Home'
import { Auth } from './pages/auth/Auth'

const Shop = () => {
  return (
    <div>
      <p>for the text shop</p>
    </div>
  )
}
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path='/shop' element={<Shop />} />
      </Route>
    </Routes>
  )
}

export { App, Shop };