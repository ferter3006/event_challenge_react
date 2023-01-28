import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { configIcon, eventIcon, homeIcon, plusIcon } from '../Icons/Icons'

function Header({ page }) {

  const appState = useSelector(state => state.appState)

  const classNameHome = page === 'home' ? 'nav-item nav-link active text-warning disabled' : 'nav-item nav-link'

  const activeClassName = 'nav-item nav-link active text-warning disabled'
  const notActiveClassName = 'nav-item nav-link'



  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark p-2'>
        <Link className='navbar-brand' to={appState.user.token ? '/home' : '#'} style={{ paddingLeft: '45px' }}>
          EcoEvents<span style={{ color: 'red' }}>code</span>Challenge
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <Link className={page === 'home' ? activeClassName : notActiveClassName} to={appState.user.token ? '/home' : '#'} >
              {homeIcon}
              Home
            </Link>
            <Link to={appState.user.token ? '/eventCreate' : '#'} className={page === 'eventCreate' ? activeClassName : notActiveClassName} >
              {plusIcon}
              NewEvent
            </Link>
            <Link to={appState.user.token ? '/myEvents' : '#'} className={page === 'myEvents' ? activeClassName : notActiveClassName}>
              {eventIcon}
              MyEvents
            </Link>
            <Link to='/test' className={notActiveClassName}>
              {eventIcon}
              Test
            </Link>
          </div>
        </div>
      </nav>
      {appState.user.token ? null :
        <>
          <p style={{ fontSize: '12px', fontWeight: '700' }}>* U need to login to see how this project works</p>
          <p style={{ fontSize: '12px', fontWeight: '700', marginTop: '-15px' }}>* U can login with test user without register</p>
        </>
      }
    </>
  )
}

export default Header
