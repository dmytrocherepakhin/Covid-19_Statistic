import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import './Header.css';
import logo from '../../images/logo.png';

function Header(): JSX.Element {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div>
          <img className="header__logo_img" src={logo} alt="covid" />
        </div>
        <div>
          <h1 className="header__heading">Statistic</h1>
        </div>
      </div>
      <SearchBar />
    </div>
  );
}

export default Header;
