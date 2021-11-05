import React from 'react';
import SearchBar from '../searchBar/SearchBar';

function Header(): JSX.Element {
  return (
    <div className="header">
      <div className="header__logo">
        <img className="header__logo_img" src="#" alt="covid" />
      </div>
      <h1 className="header__heading">Statistic</h1>
      <SearchBar />
    </div>
  );
}

export default Header;
