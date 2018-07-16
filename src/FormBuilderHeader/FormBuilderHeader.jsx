import React from 'react';
import './_bahmniGlobal.scss';

const Header = () =>
  <div>
    <div className="header-wrap">
      <header className="header">
        <nav className="nav">
          <ul>
            <li>
              <a className="back-btn" href="https://demo-us.mybahmni.org/bahmni/home/#/dashboard">
                  <i className="fa fa-home"></i>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  </div>;

export default Header;
