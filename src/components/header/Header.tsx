import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import './Header.css';
import logo from '../../assets/images/logo.png';

type IProps = {
  handleInput: React.FormEventHandler;
  value: string | string[];
};

function Header(props: IProps): JSX.Element {
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
      <SearchBar handleInput={props.handleInput} value={props.value} />
    </div>
  );
}

export default Header;
