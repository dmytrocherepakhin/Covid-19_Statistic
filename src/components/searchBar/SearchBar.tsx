import React from 'react';
import './SearchBar.css';
import zoom from '../../assets/images/search.svg';

type IProps = {
  handleInput: React.FormEventHandler;
  value: string | string[];
};

function SearchBar(props: IProps): JSX.Element {
  return (
    <div className="searchBar">
      <form className="searchBar__form" action="#">
        <input
          onChange={props.handleInput}
          value={props.value}
          placeholder="Search..."
          className="searchBar__form_input"
          type="text"
        />
        <img className="searchBar__form_zoom" src={zoom} alt="search" />
      </form>
    </div>
  );
}

export default SearchBar;
