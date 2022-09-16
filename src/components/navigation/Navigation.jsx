import { Fragment } from 'react'
import {Outlet} from 'react-router-dom'
import {ReactComponent as Logo} from '../../asset/crown.svg'
import { Link } from 'react-router-dom'
import './Navigation.scss'

const Navigation = ()=>{
    return(
        <Fragment>
          <div className='navigation'>
            <Link className='logo-container' to='/'>
              <Logo className='nav-link'/>
            </Link>
            <div className='nav-links-container'>
              <Link className='nav-link' to='/shop'>Shop</Link>
              <Link className='nav-link' to='/sign-in'>Sign in</Link>
            </div>
          </div>
            <Outlet/>
        </Fragment>
    )
}

export {Navigation}
