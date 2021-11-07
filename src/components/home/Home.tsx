/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCountries } from '../../assets/api';
import Header from '../header/Header';
import ListOfCoutries from '../listOfCoutries/ListOfCountries';
import queryString from 'query-string';
import Modal from '../modal/Modal';
import { ICountry } from '../../assets/types';

function Home(): JSX.Element {
  const history = useNavigate();
  const location = useLocation();
  const [covidData, setCovidData] = useState<ICountry[] | undefined | null>(
    null
  );
  const [openModalId, setOpenModalId] = useState<string | null>(null);
  const [modalData, setModalData] = useState<ICountry | null | undefined>(null);
  const query = queryString.parse(location.search).query;
  const value = query ? query : '';

  useEffect(() => {
    async function fetchData() {
      setCovidData(await getCountries());
    }
    if (covidData === null) fetchData();
  });

  const handleInput = (e: React.ChangeEvent): void => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    history(target.value ? '?query=' + target.value : '');
  };

  const handleCountry = (e: React.MouseEvent): void => {
    const target = e.currentTarget as HTMLInputElement;
    setOpenModalId(target.getAttribute('id'));
    setModalData(
      covidData
        ? covidData.find((el) => el.ID === target.getAttribute('id'))
        : null
    );
  };

  const handleModalBtn = (): void => {
    setOpenModalId(null);
    setModalData(null);
  };

  const sortByCountry = (): void => {
    const newCovidData = covidData?.slice();
    if (newCovidData) {
      newCovidData[0].Country < newCovidData[newCovidData.length - 1].Country
        ? newCovidData.sort((a, b) => (a.Country < b.Country ? 1 : -1))
        : newCovidData.sort((a, b) => (a.Country > b.Country ? 1 : -1));
    }
    if (newCovidData && covidData && newCovidData[0] != covidData[0])
      setCovidData(newCovidData);
  };

  const sortByTotalConfirmed = (): void => {
    const newCovidData = covidData?.slice();
    if (newCovidData) {
      newCovidData[0].TotalConfirmed <
        newCovidData[newCovidData.length - 1].TotalConfirmed
        ? newCovidData.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)
        : newCovidData.sort((a, b) => a.TotalConfirmed - b.TotalConfirmed);
    }
    if (newCovidData && covidData && newCovidData[0] != covidData[0])
      setCovidData(newCovidData);
  };

  return (
    <div className="home">
      <Header handleInput={handleInput} value={value} />
      <ListOfCoutries
        sortByCountry={sortByCountry}
        sortByTotalConfirmed={sortByTotalConfirmed}
        handleCountry={handleCountry}
        countries={covidData?.filter(
          (el) =>
            el.Country.toLowerCase()
              .split('')
              .slice(0, value.length)
              .join('') ===
            (typeof value === 'string' ? value.toLowerCase() : value)
        )}
      />
      {openModalId ? (
        <Modal
          country={modalData?.Country}
          totalConfirmed={modalData?.TotalConfirmed}
          totalDeaths={modalData?.TotalDeaths}
          totalRecovered={modalData?.TotalRecovered}
          handleModalBtn={handleModalBtn}
        />
      ) : null}
    </div>
  );
}

export default Home;
