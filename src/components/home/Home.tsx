import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCountries } from '../api';
import Header from '../header/Header';
import ListOfCoutries from '../listOfCoutries/ListOfCountries';
import queryString from 'query-string';

export interface ICountry {
  Country: string;
  ID: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}
export interface ICovidData {
  Countries: ICountry[];
}

function Home(): JSX.Element {
  const history = useNavigate();
  const location = useLocation();
  const [covidData, setCovidData] = useState<ICovidData | undefined | null>(
    null
  );

  const query = queryString.parse(location.search).query;
  const value = query ? query : '';
  console.log(value);
  useEffect(() => {
    async function fetchData() {
      setCovidData(await getCountries());
    }
    if (covidData === null) fetchData();
  });

  const handleInput = (event: React.ChangeEvent): void => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    history(target.value ? '?query=' + target.value : '');
  };

  console.log(covidData ? covidData.Countries : covidData);
  return (
    <div className="home">
      <Header handleInput={handleInput} value={value} />
      <ListOfCoutries
        countries={covidData?.Countries.filter(
          (el) =>
            el.Country.toLowerCase()
              .split('')
              .slice(0, value.length)
              .join('') ===
            (typeof value === 'string' ? value.toLowerCase() : value)
        )}
      />
    </div>
  );
}

export default Home;
