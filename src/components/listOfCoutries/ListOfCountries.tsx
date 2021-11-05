import React from 'react';
import './ListOfCoutries.css';
import Country from '../country/Country';
import Modal from '../modal/Modal';

function ListOfCoutries(): JSX.Element {
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
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Modal />
    </div>
  );
}

export default ListOfCoutries;
