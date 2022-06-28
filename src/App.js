import {Routes, Route} from 'react-router-dom'
import { Navigation } from './components/navigation/Navigation'
import {Home} from './pages/Home'
import {SignIn} from './pages/SignIn'

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
      <Route path='/sign-in' element={<SignIn/>}/>
      </Route>
    </Routes>
  );
}

export {App};