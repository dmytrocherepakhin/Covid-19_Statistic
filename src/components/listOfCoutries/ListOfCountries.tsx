/* eslint-disable prettier/prettier */
import React from 'react';
import './ListOfCoutries.css';
import Country from '../country/Country';
import Modal from '../modal/Modal';
import { ICountry } from '../home/Home';

function ListOfCoutries(props: any): JSX.Element {
  return (
    <div className="list">
      <div className="list__columnHeadings">
        <div className="list__columnHeadings_number">
          <span>{'\u2116'}</span>
        </div>
        <div className="list__columnHeadings_name">
          <span>Country</span>
        </div>
        <div className="list__columnHeadings_total">
          <span>Total Confirmed</span>
        </div>
      </div>
      {props.countries
        ? props.countries.map((item: ICountry, index: number) => (
          <Country
            key={item.ID}
            country={item.Country}
            totalConfirmed={item.TotalConfirmed}
            num={index + 1}
          />
        ))
        : null}
      {/* <Modal /> */}
    </div>
  );
}

export default ListOfCoutries;
