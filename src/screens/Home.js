import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => (
  <div className="home">
    <div className="home__member">
      <ul className="home__member-list">
        {[...Array(10).keys()].map(() => (
          <li className="home__member-item">
            <dl className="home__member-detail">
              <dt className="home__member-cat">
                <NavLink to="/">
                  <span className="type-outer">
                    <span className="typewriter__wrapper">Lorem ipsum dolor sit amet</span>
                  </span>
                </NavLink>
              </dt>
              <dd className="home__member-name">
                <NavLink to="/">
                  <span class="type-outer -complete" id="name-tomoya-yamamoto">
                    <span class="Typewriter__wrapper">
                      <span class="name-initial">C</span>onsectetur adipisicing
                    </span>
                  </span>
                </NavLink>
              </dd>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Home;
