import React from 'react';
import './Country.css';

type IProps = {
  country: string;
  handleCountry: React.MouseEventHandler;
  num: number;
  totalConfirmed: number;
  id: string;
};

function Country(props: IProps): JSX.Element {
  return (
    <div
      id={props.id}
      className="country list__columnHeadings"
      onClick={props.handleCountry}
    >
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
