import React from 'react';
import { ICountry } from '../home/Home';
import './Country.css';

// type IProps = ICountry & number;

function Country(props: any): JSX.Element {
  return (
    <div className="country list__columnHeadings">
      <div className="country__number list__columnHeadings_number">
        <span>{props.num}</span>
      </div>
      <div className="country__name list__columnHeadings_name">
        <span>{props.country}</span>
      </div>
      <div className="country__total list__columnHeadings_total">
        <span>{props.totalConfirmed}</span>
      </div>
    </div>
  );
}

export default Country;
