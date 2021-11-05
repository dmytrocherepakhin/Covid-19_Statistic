import React from 'react';
import Header from '../header/Header';
import ListOfCoutries from '../listOfCoutries/ListOfCountries';

function Home(): JSX.Element {
  return (
    <div className="home">
      <Header />
      <ListOfCoutries />
    </div>
  );
}

export default Home;
