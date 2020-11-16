import React from 'react'
import { Link } from 'react-router-dom';

const ModalMenu = ({setValue,isOpen}) => {


  return (
    <nav className={`modal-menu ${isOpen ? 'nav-open' : ''}`}>
    <div className="drawer-toggle" onClick={() => setValue(!isOpen)}>
      <div className="drawer-humberger"/>
    </div>
    <div className="modal-menu__inner drawer-nav">
      <div className="modal-menu__gnav site-menu">
        <div className="site-menu__left">
          <div className="site-menu__contact-info">
            <Link to="/">
              <div className="site-menu__text site-menu__text--child">
              〒153-0042
              </div>
              <div className="site-menu__text">
              東京都目黒区青葉台４丁目５−１２−１０１
              </div>
            </Link>
            <Link>
              <div className="site-menu__text">
                info@creativecloud.com
              </div>
            </Link>
          </div>
        </div>
        <div className="site-menu__right">
          <div className="site-menu__list">
            <div className="site-menu__list-item">
              <Link>
                <span className="modal-flash">
                Top
                </span>
              </Link>
            </div>
            <div className="site-menu__list-item">
              <Link>
                <span className="modal-flash">
                  About
                </span>
              </Link>
            </div>
            <div className="site-menu__list-item">
              <Link>
                <span className="modal-flash">
                  Case Study
                </span>
              </Link>
            </div>
            <div className="site-menu__list-item">
              <Link>
                <span className="modal-flash">
                  Service
                </span>
              </Link>              
              <div className="menu-list-child">
                <div className="menu-list-child__item">
                  <Link>
                  <span className="modal-flash--child">
                    Design
                  </span>
                  </Link>
                </div>
                <div className="menu-list-child__item">
                  <Link>
                    <span className="modal-flash--child">
                      Development
                    </span>
                  </Link>
                </div>
                <div className="menu-list-child__item">
                  <Link>
                    <span className="modal-flash--child">
                      Direction
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="site-menu__list-item">
              <Link>
                <span className="modal-flash">
                  Contact
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </nav>
  )
}

export default ModalMenu