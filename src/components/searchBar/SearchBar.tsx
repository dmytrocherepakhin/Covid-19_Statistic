import React from 'react';
import './SearchBar.css';

function SearchBar(props: any): JSX.Element {
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
        <button className="searchBar__form_btn" type="submit">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="#666666"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M29.5898 25.9395L23.748 20.0977C23.4844 19.834 23.127 19.6875 22.752 19.6875H21.7969C23.4141 17.6191 24.375 15.0176 24.375 12.1875C24.375 5.45508 18.9199 0 12.1875 0C5.45508 0 0 5.45508 0 12.1875C0 18.9199 5.45508 24.375 12.1875 24.375C15.0176 24.375 17.6191 23.4141 19.6875 21.7969V22.752C19.6875 23.127 19.834 23.4844 20.0977 23.748L25.9395 29.5898C26.4902 30.1406 27.3809 30.1406 27.9258 29.5898L29.584 27.9316C30.1348 27.3809 30.1348 26.4902 29.5898 25.9395ZM12.1875 19.6875C8.04492 19.6875 4.6875 16.3359 4.6875 12.1875C4.6875 8.04492 8.03906 4.6875 12.1875 4.6875C16.3301 4.6875 19.6875 8.03906 19.6875 12.1875C19.6875 16.3301 16.3359 19.6875 12.1875 19.6875Z" />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
