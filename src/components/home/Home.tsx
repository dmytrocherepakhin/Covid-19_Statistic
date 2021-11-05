import React from 'react';
import Header from '../header/Header';
import Items from '../listOfCoutries/ListOfCountries';
import './Home.css';

function Home(): JSX.Element {
  return (
    <div className="home">
      <Header />
      <Items />
    </div>
  );
}

export default Home;
