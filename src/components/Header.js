import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../paper-plane.svg'
import LogoWhite from '../paper-plane-white.svg'
const Header = ({isOpen}) =>{
  return (
    <header className="header">
      <h1 className="header__logo">
        <NavLink to="/">
        <img src={isOpen ? LogoWhite : Logo}/>
        </NavLink>
      </h1>
      {/* <ul className="header__menu">
          <li className="header__menu-item">
            <Link to="/">
              <span className="type-outer">
                  Home
              </span>
            </Link>
          </li>
          <li className="header__menu-item">
            <Link to="/">
              <span className="type-outer">
                  About
              </span>
            </Link>
          </li>
          <li className="header__menu-item">
            <Link to="/">
              <span className="type-outer">
                  Member
              </span>
            </Link>
          </li>
          <li className="header__menu-item">
            <Link to="/">
              <span className="type-outer">
                  Contact
              </span>
            </Link>
          </li>
        </ul> */}
    </header>
  )
}

export default Header