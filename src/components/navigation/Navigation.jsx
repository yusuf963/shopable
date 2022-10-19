import { useContext } from 'react'
import {Outlet} from 'react-router-dom'
import {ReactComponent as Logo} from '../../asset/crown.svg'
import { Link } from 'react-router-dom'
import { UserContext, CartContext } from '../../context/user.context' 
import {signOutUser} from '../../utils/firebase/firebase'
import './Navigation.scss'


export const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const { currentCart } = useContext(CartContext)
  console.log(currentCart)

  console.log('currentUser', currentUser)
    const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container'  to='/'>
          <Logo />
        </Link >
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          {currentUser ?
            (<Link onClick={signOutHandler} className='nav-link' to='/auth'>
              Sign Out
            </Link>
            ):( <Link className='nav-link' to='/auth'>
            Sign In
            </Link>)
          }
          <p>{ currentCart}</p>
        </div>
      </div>
      <Outlet />
    </>
  )
}