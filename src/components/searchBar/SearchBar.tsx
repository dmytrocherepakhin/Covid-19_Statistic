import React from 'react';

function SearchBar(): JSX.Element {
  return (
    <div className="searchBar">
      <form className="searchBar__form" action="#">
        <input
          placeholder="Search..."
          className="searchBar__form_input"
          type="text"
        />
        <button className="searchBar__form_btn" type="submit">
          <img src="#" alt="search" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
