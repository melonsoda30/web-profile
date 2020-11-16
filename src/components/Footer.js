import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../paper-plane.svg'

const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__sitemenu">asd</div>
        <div className="footer__logo">
          <div className="footer__logo-icon">
            <NavLink to="/">
            <img src={Logo}/>
            </NavLink>
          </div>
          <div className="footer__logo-desc">
            <Link to="/">
            2-14-27 2F Hiroo, Shibuya-ku, Tokyo 
            <br/>
            150-0012
            </Link>
          </div>
          <div className="footer__sns">
            asdsad
          </div>
          <div className="footer__copyright">
<div className="footer__copyright-text">
© 2020 CCC management inc.
</div>
          </div>

        </div>
      </div>
      <div className="footer__contact">
        <div className="footer__contact-btn">
          <Link className="footer__contact-link" to="/">
            <span className="footer__contact-text">
              Contact Us
            </span>
          </Link>
        </div>
        <div className="footer__contact-panel">
          <div className="footer__contact-inner">
            <p className="footer__contact-summary">If you are in a hungry</p>
            <p className="footer__contact-phone">TEL 03-6631-6636 / FAX 03-6685-5959</p>
            <p className="footer__contact-mail">miftah.it2@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer