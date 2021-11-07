/* eslint-disable prettier/prettier */
import React from 'react';
import './ListOfCoutries.css';
import Country from '../country/Country';
import { ICountry } from '../home/Home';

function ListOfCoutries(props: any): JSX.Element {
  return (
    <div className="list">
      <div className="list__columnHeadings">
        <div className="list__columnHeadings_number">
          <span>{'\u2116'}</span>
        </div>
        <div
          className="list__columnHeadings_name"
          onClick={props.sortByCountry}
        >
          <span>Country</span>
        </div>
        <div
          className="list__columnHeadings_total"
          onClick={props.sortByTotalConfirmed}
        >
          <span>Total Confirmed</span>
        </div>
      </div>
      {props.countries
        ? props.countries.map((item: ICountry, index: number) => (
          <Country
            handleCountry={props.handleCountry}
            key={item.ID}
            country={item.Country}
            totalConfirmed={item.TotalConfirmed}
            num={index + 1}
            id={item.ID}
          />
        ))
        : null}
    </div>
  );
}

export default ListOfCoutries;
