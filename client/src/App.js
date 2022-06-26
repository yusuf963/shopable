import {Routes, Route} from 'react-router-dom'
import { Navigation } from './components/navigation/Navigation'
import {Home} from './pages/Home'

const Shop =()=>{
  return(
    <div>
      <p>shop</p>
    </div>
  )
}
const App =()=> {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      </Route>
    </Routes>
  );
}

export {App};