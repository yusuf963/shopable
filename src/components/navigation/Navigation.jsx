import { Fragment } from 'react'
import {Outlet} from 'react-router-dom'
import {ReactComponent as Logo} from '../../asset/crown.svg'
import { Link } from 'react-router-dom'
import './Navigation.scss'

export const Navigation = () => {
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
          <Link className='nav-link' to='/auth'>
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}